Consider the following version of Bubble Sort:

for (int i = 0; i < n; i++) {
    
    for (int j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
        }
    }
    
}

Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following three lines:

    Array is sorted in numSwaps swaps., where 

is the number of swaps that took place.
First Element: firstElement, where
is the first element in the sorted array.
Last Element: lastElement, where

    is the last element in the sorted array.

Hint: To complete this challenge, you must add a variable that keeps a running tally of all swaps that occur during execution.

Example

swap    a       
0       [6,4,1]
1       [4,6,1]
2       [4,1,6]
3       [1,4,6]

The steps of the bubble sort are shown above. It took

swaps to sort the array. Output is:

Array is sorted in 3 swaps.  
First Element: 1  
Last Element: 6  

Function Description

Complete the function countSwaps in the editor below.

countSwaps has the following parameter(s):

    int a[n]: an array of integers to sort

Prints

Print the three lines required, then return. No return value is expected.

Input Format

Sorting: Bubble Sort
/*
The first line contains an integer,
, the size of the array .
The second line contains space-separated integers

.

Constraints

Output Format

Sample Input 0

STDIN   Function
-----   --------
3       a[] size n = 3
1 2 3   a = [1, 2, 3]

Sample Output 0

Array is sorted in 0 swaps.
First Element: 1
Last Element: 3

Explanation 0
The array is already sorted, so

swaps take place.

Sample Input 1

3
3 2 1

Sample Output 1

Array is sorted in 3 swaps.
First Element: 1
Last Element: 3

Explanation 1
The array is not sorted, and its initial values are:
. The following

swaps take place:

At this point the array is sorted and the three lines of output are printed to stdout.
*/
Solution
'use strict';

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

// Complete the countSwaps function below.

function countSwaps(a) {
    let count =0;
    for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            let temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
            count+=1;
        }
    }   
}
console.log(`Array is sorted in ${count} swaps.`);
console.log(`First Element: ${a[0]}`);
console.log(`Last Element: ${a[a.length-1]}`);
}

function main() {
    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
