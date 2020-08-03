
import fs from 'fs';
import csv from 'csvtojson';
import {Transform} from 'stream';
import transform from './helpers/transform';

const csvFilePath='./src/HT1/task2/csv/example.csv';
const readStream = fs.createReadStream(csvFilePath);
const writeStream = fs.createWriteStream('./src/HT1/task2/output/output.txt');
const customTransform = new Transform({transform});

readStream.on('error', error => console.error(error));
writeStream.on('error', error => console.error(error));

readStream.pipe(csv()).pipe(customTransform).pipe(writeStream);
