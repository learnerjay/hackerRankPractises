/*
Forward References

NOTE - Forward reference is supported by JGsoft, .NET, Java, Perl, PCRE, PHP, Delphi and Ruby regex flavors.

Forward reference creates a back reference to a regex that would appear later.
Forward references are only useful if they're inside a repeated group.
Then there may arise a case in which the regex engine evaluates the backreference after the group has been matched already.

[ach21.png]

Task

You have a test string S.
Your task is to write a regex which will match S, with following condition(s):
-  consists of tic or tac.
-  tic should not be immediate neighbour of itself.
-  The first tic must occur only when tac has appeared at least twice before.

Valid
-tactactic
-tactactictactic

Invalid
-tactactictactictictac
-tactictac

Note

This is a regex only challenge. You are not required to write any code.
You only have to fill the regex pattern in the blank (_________). 
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
        tester.checker("^(\\2tic|(tac))*$"); // Use \\ instead of using \ 
    
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
