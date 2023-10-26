const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const f = Number(input[0])
    const s = Number(input[1])
    console.log(`${f} + ${s} = ${f+s}`);
});