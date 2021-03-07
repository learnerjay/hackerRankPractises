Weather Observation Station 11

Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. Your result cannot contain duplicates.

Input Format

The STATION table is described as follows:

[Station.jpg]

where LAT_N is the northern latitude and LONG_W is the western longitude. 

Solution
/*
Enter your query here.
*/
SELECT DISTINCT CITY FROM STATION WHERE CITY NOT RLIKE '^[AEIOU]' OR CITY NOT RLIKE '[AEIOU]$';
/*
RLIKE operator performs a pattern match of a string expression against a pattern. The pattern is supplied as an argument. 
*/
