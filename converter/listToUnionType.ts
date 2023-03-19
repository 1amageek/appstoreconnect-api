import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

function transformer<T extends ts.Node>(names: string[]): ts.TransformerFactory<T> {
  return (context) => {
    const visitor: ts.Visitor = (node) => {
      // console.log(node.kind, node.getText())
      if (ts.isVariableDeclarationList(node)) {
        const result = convert(node, names);
        if (result) {
          names.push(result[1])
          return result[0];
        }
      }
      if (ts.isTypeAliasDeclaration(node)) {
        return convertType(node, names);
      }
      return ts.visitEachChild(node, visitor, context);
    };
    return (node) => ts.visitNode(node, visitor) as T;
  };
}

function convert(node: ts.VariableDeclarationList, names: string[]): [ts.TypeAliasDeclaration, string] | undefined {
  const declaration = node.declarations[0];
  const objectLiteralExpression = declaration.initializer?.getChildren()[0]
  if (objectLiteralExpression === undefined) return undefined;
  if (!ts.isObjectLiteralExpression(objectLiteralExpression)) return undefined;
  const properties = objectLiteralExpression.properties.map((property) => {
    if (ts.isPropertyAssignment(property)) {
      return ts.factory.createLiteralTypeNode(property.initializer as any);
    }
    return undefined;
  }).filter((node): node is ts.LiteralTypeNode => node !== undefined);
  const unionType = ts.factory.createUnionTypeNode(properties);
  const typeName = declaration.name.getText()
  return [ts.factory.createTypeAliasDeclaration(
    [],
    typeName,
    undefined,
    unionType
  ), typeName]
}

function convertType(node: ts.TypeAliasDeclaration, names: string[]) {
  console.log(node.kind, node.name.getText())
  const name = node.name.getText()
  if (names.includes(name)) {
    return ts.factory.createNotEmittedStatement(node);
  }
  return undefined
}

function main() {
  const srcPath = '../fetch/apis';
  const outPath = '../apis';

  let names = []

  if (!fs.existsSync(outPath)) {
    fs.mkdirSync(outPath);
  }

  fs.readdirSync(srcPath).forEach((file) => {
    const filePath = path.join(srcPath, file);
    const ext = path.extname(filePath);

    if (ext === '.ts') {
      const sourceFile = ts.createSourceFile(
        filePath,
        fs.readFileSync(filePath).toString(),
        ts.ScriptTarget.ESNext,
        true
      );
      const result = ts.transform(sourceFile, [transformer(names)]);
      const printer = ts.createPrinter();
      const outputText = printer.printFile(result.transformed[0]);
      const outputPath = path.join(outPath, file);
      fs.writeFileSync(outputPath, outputText);
    }
  });
}

main();
