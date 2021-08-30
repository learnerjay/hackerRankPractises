/*
New Year Chaos
It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! There are a number of
people queued up, and each person wears a sticker indicating their initial position in the queue. Initial
positions increment by 1 from 1 at the front of the line to  n at the back.
Any person in the queue can bribe the person directly in front of them to swap positions. If two people
swap positions, they still wear the same sticker denoting their original places in line. One person can bribe
at most two others. For example, if n=8 and person 5 bribes person 4 , the queue will look like this: 
.1,2,3,4,5,6,7,8

Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took
place to get the queue into its current state!

Function Description

Complete the function minimumBribes in the editor below. It must print an integer representing the
minimum number of bribes necessary, or Too chaotic  if the line configuration is not possible.
minimumBribes has the following parameter(s):
q: an array of integers

Input Format
The first line contains an integer t , the number of test cases.
Each of the next t pairs of lines are as follows: 
- The first line contains an integer t  , the number of people in the queue 
- The second line has n  space-separated integers describing the final state of the queue.
Constraints
Subtasks
For   score 
For   score 
Output Format
Print an integer denoting the minimum number of bribes needed to get the queue into its final state. Print
Too chaotic  if the state is invalid, i.e. it requires a person to have bribed more than   people
*/
Solution
'use strict';

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
 * Complete the 'minimumBribes' function below.
 *
 * The function accepts INTEGER_ARRAY q as parameter.
 */

function minimumBribes(q) {
    let swaps = 0;
    let chaotic = false;
    for (var i = q.length - 1; i >= 0; i--){
        if (q[i] - i > 3)
            chaotic = true;

    for (let j= q[i]-2;j<i;j++){
        if(q[j]>q[i])
            swaps++;
    }
       
    }
    if(chaotic) 
    console.log("Too chaotic")
    else console.log(swaps)

}

function main() {
    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        const q = readLine().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
