/*
Find A Sub-Word

We define a word character to be any of the following:

    An English alphabetic letter (i.e., a-z and A-Z).
    A decimal digit (i.e., 0-9).
    An underscore (i.e., _, which corresponds to ASCII value 

    ).

We define a word to be a contiguous sequence of one or more word characters that is preceded and succeeded by one or more occurrences of non-word-characters or line terminators. For example, in the string I l0ve-cheese_?, the words are I, l0ve, and cheese_.

We define a sub-word as follows:

    A sequence of word characters (i.e., English alphabetic letters, digits, and/or underscores) that occur in the same exact order (i.e., as a contiguous sequence) inside another word.
    It is preceded and succeeded by word characters only.

Given
sentences consisting of one or more words separated by non-word characters, process queries where each query consists of a single string, . To process each query, count the number of occurrences of as a sub-word in all

sentences, then print the number of occurrences on a new line.

Input Format

The first line contains an integer, n, denoting the number of sentences.
Each of the
subsequent lines contains a sentence consisting of words separated by non-word characters.
The next line contains an integer, , denoting the number of queries.
Each line of the subsequent lines contains a string,

, to check.

Constraints

Output Format


For each query string,
, print the total number of times it occurs as a sub-word within all words in all

sentences.

Sample Input

1
existing pessimist optimist this is
1
is

Sample Output

3

Explanation

We must count the number of times
is occurs as a sub-word in our

input sentence(s):

occurs
time as a sub-word of existing.
occurs
time as a sub-word of pessimist.
occurs
time as a sub-word of optimist.
While
is a substring of the word this, it's followed by a blank space; because a blank space is non-alphabetic, non-numeric, and not an underscore, we do not count it as a sub-word occurrence.
While

    is a substring of the word is in the sentence, we do not count it as a match because it is preceded and succeeded by non-word characters (i.e., blank spaces) in the sentence. This means it doesn't count as a sub-word occurrence.

Next, we sum the occurrences of
as a sub-word of all our words as . Thus, we print on a new line.

*/
Solution
function processData(input) {
    //Enter your code here
    // split the input according to the number of queries
    var split = input.split(/\n?\d+\n/);
    split.shift();

    // get the sentences, and join the as the paragraph to check
    var sentences = split[0].split('\n');
    var paragraph = sentences.join(' ');

    // get the subwords to look
    var subwords = split[1].split('\n');

    // for each subword, test the regex, and log the amount of matches
    subwords.forEach(function (item, index) {
        var regex = new RegExp(`[\\w]${item}[\\w]`, 'g');
        var matches = paragraph.match(regex);
        console.log(matches != null ? matches.length : 0);
    });
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
