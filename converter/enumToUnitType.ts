import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

function transformer<T extends ts.Node>(): ts.TransformerFactory<T> {
  return (context) => {
    const visitor: ts.Visitor = (node) => {
      console.log(node.kind, node.getText())
      if (ts.isEnumDeclaration(node)) {
        return transformEnumToType(node);
      }
      return ts.visitEachChild(node, visitor, context);
    };
    return (node) => {
      return ts.visitNode(node, visitor) as T
    }
  }
}

function transformEnumToType(node: ts.EnumDeclaration): ts.TypeAliasDeclaration {
  const typeName = node.name.text;
  const unionMembers = node.members.map(member => {
    return ts.factory.createLiteralTypeNode(ts.factory.createStringLiteral(member.name.getText()));
  });
  const unionType = ts.factory.createUnionTypeNode(unionMembers);
  return ts.factory.createTypeAliasDeclaration(node.modifiers, typeName, undefined, unionType);
}

function convertTypeScriptFile(srcPath: string, outPath: string): void {
  const sourceFile = ts.createSourceFile(
    srcPath,
    fs.readFileSync(srcPath).toString(),
    ts.ScriptTarget.ESNext,
    true
  );

  const transformResult = ts.transform(sourceFile, [transformer()]);
  const printer = ts.createPrinter();
  const outputText = printer.printFile(transformResult.transformed[0]);
  fs.writeFileSync(outPath, outputText);
}

const srcPath = 'src';
const outPath = './out';

if (!fs.existsSync(outPath)) {
  fs.mkdirSync(outPath);
}

const files = fs.readdirSync(srcPath);
for (const file of files) {
  const filePath = path.join(srcPath, file);
  const ext = path.extname(filePath);
  if (ext === '.ts') {
    const outputPath = path.join(outPath, file);
    convertTypeScriptFile(filePath, outputPath);
  }
}
