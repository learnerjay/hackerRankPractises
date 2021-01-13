/*
Task

You have a test string. Your task is to match the pattern xxXxxXxxxx
Here "x"denotes a digit character, and "X" denotes a non-digit character.
Note
This is a regex only challenge. You are not required to write any code.
You only have to fill the regex pattern in the blank (_________).
*/
var Regex_Pattern = /^\d{2}\D\d{2}\D\d{4}/; //Do not delete '/'. Replace __________ with your regex.
/*
/D - Matches the Non digit Character
/d - Matches the Digit Character 
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
