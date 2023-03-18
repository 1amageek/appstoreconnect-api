import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

function transformer<T extends ts.Node>(): ts.TransformerFactory<T> {
  return (context) => {
    const visitor: ts.Visitor = (node) => {
      if (ts.isMethodDeclaration(node)) {
        return transformParametersToObject(node);
      }
      return ts.visitEachChild(node, visitor, context);
    };
    return (node) => {
      return ts.visitNode(node, visitor) as T
    }
  }
}

function transformParametersToObject(node: ts.MethodDeclaration): ts.MethodDeclaration {
  const parameterObjectProperties: ts.PropertySignature[] = node.parameters.map(param => {
    const name = param.name.getText()
    const type = param.type as ts.TypeNode;
    return ts.factory.createPropertySignature(undefined, name, param.questionToken, type);
  });

  // Params
  const parameterObjectType = ts.factory.createTypeLiteralNode(parameterObjectProperties);
  const parameterObject = ts.factory.createParameterDeclaration(
    undefined,
    undefined,
    'params',
    undefined,
    parameterObjectType,
    undefined
  );

  // Declarations
  const destructuredObject = ts.factory.createObjectBindingPattern(
    node.parameters.map(param => {
      const name = param.name.getText();
      return ts.factory.createBindingElement(undefined, undefined, name);
    })
  );

  const variableDeclaration = ts.factory.createVariableDeclaration(
    destructuredObject,
    undefined,
    undefined,
    ts.factory.createIdentifier('params')
  );

  const variableStatement = ts.factory.createVariableStatement(undefined, ts.factory.createVariableDeclarationList([variableDeclaration], ts.NodeFlags.Const));
  const updatedBlock = ts.factory.createBlock([variableStatement, ...(node.body?.statements || [])], true);
  return ts.factory.updateMethodDeclaration(
    node,
    node.modifiers,
    node.asteriskToken,
    node.name,
    undefined,
    node.typeParameters,
    [parameterObject],
    node.type,
    updatedBlock
  )
}

const srcPath = '../src/api';
const outPath = 'out';

if (!fs.existsSync(outPath)) {
  fs.mkdirSync(outPath);
}

fs.readdirSync(srcPath).forEach(file => {
  const filePath = path.join(srcPath, file);
  const ext = path.extname(filePath);

  if (ext === '.ts') {
    const sourceFile = ts.createSourceFile(
      filePath,
      fs.readFileSync(filePath).toString(),
      ts.ScriptTarget.ESNext,
      true
    );
    const result = ts.transform(sourceFile, [transformer()]);
    const printer = ts.createPrinter();
    const outputText = printer.printFile(result.transformed[0]);
    const outputPath = path.join(outPath, file);
    fs.writeFileSync(outputPath, outputText);

  }
});
