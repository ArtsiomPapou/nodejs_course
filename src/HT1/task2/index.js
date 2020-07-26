/**
 * Write a program which should do the following:
 * •Read the content of csvfile from./csvdirectory. Example: https://epa.ms/nodejs19-hw1-ex1
 * •Use the csvtojsonpackage (https://github.com/Keyang/node-csvtojson) to convert csvfile to jsonobject.
 * •Write the csvfile content to a new txtfile.Use the following format: https://epa.ms/nodejs19-hw1-ex2.
 * •Do not load all the content of the csvfile into RAM via stream (read/write file content line by line).
 * •In case of read/write errors, log them in the console.
 * •The program should be started via npm scriptusing nodemon(i.e. npm run task2)
 */
import fs from 'fs';
import csv from 'csvtojson';
const csvFilePath='./src/HT1/task2/csv/example.csv';
const readStream = fs.createReadStream(csvFilePath, {highWaterMark: 5});
const writeStream = fs.createWriteStream('./src/HT1/task2/test.txt');

readStream.on('error', error => console.error(error));
writeStream.on('error', error => console.error(error));

readStream.pipe(csv()).pipe(writeStream);
