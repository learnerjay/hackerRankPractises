/**
Given an array of size n and multiple values around which we need to left rotate the array. How to quickly print multiple left rotations?
Input : 
arr[] = {1, 3, 5, 7, 9}
k1 = 1
Output : 
9 1 3 5 7
**/


'use strict';
const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});
function readLine() {
    return inputString[currentLine++];
}

// Complete the rotLeft function below.
function rotLeft(a, d) {
    let b = a;
    for(let i=0;i< d;i++){
        a.push(a.shift());
    }
    return b;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const nd = readLine().split(' ');
    const n = parseInt(nd[0], 10);
    const d = parseInt(nd[1], 10);
    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
    const result = rotLeft(a, d);
    ws.write(result.join(' ') + '\n');
    ws.end();
}
