#!/usr/bin/env node
// the first line is telling the file to run in node env, now we can directly run this file from terminal, and it will run in node env.

console.log("Hello from app.js");

function add(a, b) {
    return a+b;
}

console.log(add(5, 8));

// Making a progress bar in console
const ProgressBar = require('progress');

const bar = new ProgressBar(":bar", {total: 10});
// const timer = setInterval(() => {
//     bar.tick();
//     console.log(bar.curr)
//     if (bar.complete) {
//         clearInterval(timer);
//     }
// }, 500)

exports.add = add;
exports.bar = bar;


// Taking input from console/terminal
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// readline.question(`What's your name: `, name => {
//     console.log(`Hi ${name}!`);
//     readline.close();
// })

// let name;

// readline.on('line', line => {
//     name = line;
//     readline.close();
//     return name;
// })

// console.log(name);

