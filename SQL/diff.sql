/*
Query the difference between the maximum and minimum populations in CITY.

Input Format
The CITY table is described as follows:
CITY
Field 	Type
ID 	NUMBER
NAME 	VARCHAR2(17)
COUNTRYCODE 	VARCHAR2(3)
DISTRICT 	VARCHAR2(20)
POPULATION 	NUMBER
*/
Solution
/*
Enter your query here.
Please append a semicolon ";" at the end of the query and enter your query in a single line to avoid error.
*/
SELECT MAX(POPULATION) - MIN(POPULATION) FROM CITY;