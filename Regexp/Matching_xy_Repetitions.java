\*
Matching {x, y} Repetitions
The {x,y} tool will match between and

(both inclusive) repetitions of character/character class/group.

[ach11.png]

For Example:

w{3,5} : It will match the character w
, or times.
[xyz]{5,} : It will match the character x, y or z or more times.
\d{1, 4} : It will match any digits , , , or

times.

Task

You have a test string
.
Your task is to write a regex that will match

using the following conditions:

should begin with or
digits.
After that,
should have
or more letters (both lowercase and uppercase).
Then
should end with up to . symbol(s). You can end with to

    . symbol(s), inclusively.

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
        tester.checker("^\\d{1,2}[a-zA-Z]{3,}\\.{0,3}$"); // Use \\ instead of using \ 
    
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