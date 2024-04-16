const { argv } = require('node:process');

// print process.argv
for (let i = 0; i < process.argv.length; i++) {
  console.log(`${i} -> ${process.argv[i]}`);
}
