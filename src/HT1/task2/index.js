
import fs from 'fs';
import csv from 'csvtojson';
const csvFilePath='./src/HT1/task2/csv/example.csv';
const readStream = fs.createReadStream(csvFilePath, {highWaterMark: 5});
const writeStream = fs.createWriteStream('./src/HT1/task2/test.txt');

readStream.on('error', error => console.error(error));
writeStream.on('error', error => console.error(error));

readStream.pipe(csv()).pipe(writeStream);
