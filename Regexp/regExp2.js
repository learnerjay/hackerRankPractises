/**
Task
You have a test string S. Your task is to match the pattern XXxXXxXX
Here, x denotes whitespace characters, and X denotes non-white space characters.
Note
This is a regex only challenge. You are not required to write code.
You have to fill the regex pattern in the blank (_________).
**/
var Regex_Pattern = /\S{2}\s\S{2}\s\S{2}/; //Do not delete '/'. Replace __________ with your regex.
/* Matches Exact places as per the reptitaion's & the placing of the White/Non-Whited Character's.
*/

function processData(Test_String) {
    //Enter your code here
    
    console.log(!!Test_String.match(Regex_Pattern));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
