\*
Excluding Specific Characters
Points: 35Rank: 40288
Your Excluding Specific Characters submission got 10.00 points.
  
Try the next challenge | Try a Random Challenge
Problem
Submissions
Leaderboard
Discussions
Editorial

The negated character class [^] matches any character that is not in the square brackets.

[ach08.png]

Task

You have a test string
.
Your task is to write a regex that will match

with the following conditions:

must be of length 6.
First character should not be a digit (
or
).
Second character should not be a lowercase vowel (
or
).
Third character should not be b, c, D or F.
Fourth character should not be a whitespace character ( \r, \n, \t, \f or <space> ).
Fifth character should not be a uppercase vowel (
or

    ).
    Sixth character should not be a . or , symbol.

Note

This is a regex only challenge. You are not required to write any code.
You have to fill the regex pattern in the blank (_________).
*/
Solution
import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {    

    public static void main(String[] args) {
        
        Regex_Test tester = new Regex_Test();
        tester.checker("(^[^0-9][^aeiou][^bcCDF][^\\s][^AEIOU][^.,]$)"); // Use \\ instead of using \ 
    
    }
}

class Regex_Test {

    public void checker(String Regex_Pattern){
    
        Scanner Input = new Scanner(System.in);
        String Test_String = Input.nextLine();
        Pattern p = Pattern.compile(Regex_Pattern);
        Matcher m = p.matcher(Test_String);
        System.out.println(m.find());
    }   
    
}