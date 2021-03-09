Weather Observation Station 12
75 more points to get your next star!
Rank: 319670|Points: 225/300
Sql
Problem
Submissions
Leaderboard
Discussions

Query the list of CITY names from STATION that do not start with vowels and do not end with vowels. Your result cannot contain duplicates.

Input Format

The STATION table is described as follows:

[Station.jpg]

where LAT_N is the northern latitude and LONG_W is the western longitude. 

Solution
SELECT DISTINCT CITY FROM STATION WHERE CITY NOT RLIKE '^[AEIOU]' AND CITY NOT RLIKE '[AEIOU]$';