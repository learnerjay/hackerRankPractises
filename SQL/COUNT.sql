Revising Aggregations - The Sum Function

Sql
Problem
Submissions
Leaderboard
Discussions

Query the total population of all cities in CITY where District is California.

Input Format

The CITY table is described as follows: 
Solution
SELECT sum(population) FROM CITY WHERE DISTRICT='California';