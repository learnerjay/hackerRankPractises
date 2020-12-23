\**
Objective
In this challenge, we use a Regular Expression to evaluate a string. Check out the attached tutorial for more details.
Task
Complete the function in the editor below by returning a RegExp object, re, that matches any string s that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.
Constraints
    The length of string s is >= 3.
    String s consists of lowercase letters only (i.e., [a-z]).
**/
Solution

function regexVar(str) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([aeiou]).*\1$/ ;
    
    /*
     * Do not remove the return statement
     */
    return re;
}