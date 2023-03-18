import * as fs from 'fs';
import { convertFunction } from './functionConverter';

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!inputPath || !outputPath) {
    console.error('Usage: node convert.js <inputPath> <outputPath>');
    process.exit(1);
}

// Read the input file
const inputFileContents = fs.readFileSync(inputPath, 'utf-8');

// Convert the function
const convertedFunction = convertFunction(inputFileContents);

// Write the output file
fs.writeFileSync(outputPath, convertedFunction, 'utf-8');

console.log('Conversion complete!');
