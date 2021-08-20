/*
Arrays – DS

An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, A, of size N, each memory location has some unique index, i (where 0 <= i <= N), that can be referenced as A[i] (you may also see it written as Ai).
Input Format

The first line contains an integer, N (the number of integers in A).
The second line contains N space-separated integers describing A.
Constraints

    1 <= N <= 103
    1 <= Ai <= 104, where Ai is the ith integer in A

Output Format

Print all N integers in A in reverse order as a single line of space-separated integers.
*/
Solution
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(a) {
    // Write your code here
    //var arr = [1, 2, 3, 4];
    let arr = [];
    for (var i = a.length - 1; i >= 0; i--) {
        arr.push(a[i]);
    }
        return arr;
    }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = reverseArray(arr);

    ws.write(res.join(' ') + '\n');

    ws.end();
}
