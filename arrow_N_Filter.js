'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
//es5
function modifyArray(nums) {
        var a = function(n){
            if(n % 2 == 0){
                return n*2;
            }else{
                return n*3;
            }
        }
        var b = nums.map(a);
        return b;
    
}
/**
Solution 2 - ES6
var a = n => n = (n%2 == 0) ? n*2 : n*3;
var b = n.map(a);
return b;
**/

function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}