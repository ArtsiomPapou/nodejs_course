/**
 * Example 1 by readline. stdin\stout under the hood
 */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
rl.on('line', (input) => {
  console.log(input.split('').reverse().join(''));
});
rl.on('SIGINT', () => {rl.close()});

/**
 * Example 2 by stdin\stdout directly
 */
// process.stdin.resume();
// process.stdin.on('data', (data) => {
//   process.stdout.write(`${data.toString().split('').reverse().join('')}\n`);
// });

// process.on('SIGINT', () => {
//   console.log('Received SIGINT.  Press Control-D to exit.');
// });