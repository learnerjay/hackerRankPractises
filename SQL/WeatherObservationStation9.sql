Weather Observation Station 9
100 more points to get your next star!
Rank: 343427|Points: 200/300
Sql
Problem
Submissions
Leaderboard
Discussions

Query the list of CITY names from STATION that do not start with vowels. Your result cannot contain duplicates.

Input Format

The STATION table is described as follows:

[Station.jpg]

where LAT_N is the northern latitude and LONG_W is the western longitude. 

Solution
/*
Enter your query here.
*/
SELECT DISTINCT CITY FROM STATION WHERE CITY REGEXP '^[^aeiou]';