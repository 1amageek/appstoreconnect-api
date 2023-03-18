import * as fs from 'fs';
import * as esprima from 'esprima';
import * as escodegen from 'escodegen';
import { parse } from 'comment-parser';

export function convertFunction(input: string): string {
    // Parse the TypeScript code to an AST
    const ast = esprima.parseModule(input, { range: true, comment: true });

    // Extract the comments
    const comments = parse(ast.comments!.map(com => com.value).join('\n'));

    // Find the function declaration
    const functionDeclaration = ast.body.find(node => {
        if (node.type === 'FunctionDeclaration') {
            return true;
        } else if (node.type === 'ExportNamedDeclaration' && node.declaration) {
            return node.declaration.type === 'FunctionDeclaration';
        }
        return false;
    });

    if (!functionDeclaration) {
        throw new Error('Function declaration not found');
    }

    // Update the function declaration with a single object parameter
    const functionNode = functionDeclaration.type === 'FunctionDeclaration' ? functionDeclaration : (functionDeclaration as any).declaration;
    functionNode.params = [{ type: 'Identifier', name: 'params' }];

    // Generate the TypeScript code from the updated AST
    const output = escodegen.generate(ast);

    // Add the comment back to the output
    const formattedComment = '/**\n' + comments[0].tags.map(tag => ' * ' + tag.source).join('\n') + '\n */\n';
    const outputWithComment = output.replace(/(async\s+)?function/, formattedComment + '$&');

    return outputWithComment;
}
