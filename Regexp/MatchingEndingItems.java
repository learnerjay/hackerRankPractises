\*
Matching Ending Items

The $ boundary matcher matches an occurrence of a character/character class/group at the end of a line.

[matching end items.png]

Task

Write a RegEx to match a test string,S, under the following conditions:

S should consist of only lowercase and uppercase letters (no numbers or symbols).
S should end in s.

This is a RegEx-only challenge, so you are not required to write any code.
Simply replace the blank (_________) with your RegEx pattern.
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
        tester.checker("^[a-zA-z]*s$"); // Use \\ instead of using \ 
    
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