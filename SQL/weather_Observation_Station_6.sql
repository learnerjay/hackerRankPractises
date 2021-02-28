Weather Observation Station 6
125 more points to get your next star!
Rank: 373174|Points: 175/300
Sql
Problem
Submissions
Leaderboard
Discussions

Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.

Input Format

The STATION table is described as follows:

[Station.jpg]

where LAT_N is the northern latitude and LONG_W is the western longitude.

Solution
SELECT DISTINCT(CITY) FROM STATION WHERE( CITY RLIKE '^[aeiou]' ) ;