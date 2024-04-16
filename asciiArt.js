const { argv } = require('node:process');
const figlet = require('figlet');

// print process.argv
for (let i = 2; i < process.argv.length; i++) {
  figlet.text(process.argv[i], (err, data) => {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    });
}
