/*
Problem
Query the Name of any student in STUDENTS who scored higher than 75 Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.
Input Format
The STUDENTS table is described as follows:
Column 	Type
ID 	Integer
Name 	String
Marks 	Integer

The Name column only contains uppercase (A-Z) and lowercase (a-z) letters.

Sample Input
ID 	Name 	Marks
1 	Ashley 	81
2 	Samantha 	75
4 	Julia 	76
3 	Belvet 	84

Sample Output

    Ashley
    Julia
    Belvet

Explanation
Only Ashley, Julia, and Belvet have Marks >75. If you look at the last three characters of each of their names, there are no duplicates and ‘ley’ < ‘lia’ < ‘vet’.
Analysis

    query student names ==> SELECT Name
    from STUDENTS table ==> FROM STUDENTS
    score higher than 75 Marks ==> WHERE Marks > 75
    order output by last three characters of name ==> ORDER BY RIGHT(Name, 3)
    secondary sort by ascending ID ==> ORDER BY RIGHT(Name, 3), ID

Solution 

Enter your query here.
Please append a semicolon ";" at the end of the query and enter your query in a single line to avoid error.
*/
SELECT NAME FROM STUDENTS WHERE MARKS > 75 ORDER BY SUBSTR(NAME, -3) ASC;