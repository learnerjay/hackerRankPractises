Matching Zero Or More Repetitions

The * tool will match zero or more repetitions of character/character class/group.

For Example:

w* : It will match the character w
or more times.
[xyz]* : It will match the characters x, y or z or more times.
\d* : It will match any digit

or more times.

Task

You have a test string
.
Your task is to write a regex that will match

using the following conditions:

should begin with
or more digits.
After that,
should have
or more lowercase letters.
should end with

    or more uppercase letters

Note

This is a regex only challenge. You are not required to write any code.
You have to fill the regex pattern in the blank (_________).

Solution

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {    

    public static void main(String[] args) {
        
        Regex_Test tester = new Regex_Test();
        tester.checker("^[1-9]{2,}[0,a-z]*[0,A-Z]*$"); // Use \\ instead of using \ 
    
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