/*PROBLEM 13
Ajay is given a series(In example).he gone through the series but unable to understand
it properly,he has hired you.Your task is to understand the series and print the series
2,6,12,20,30... .You are given with a number ‘n’. Find the nth number of series.
Input Description: ꢀ
You will be given a number ‘n’
Output Description: ꢀ
Print the nth number of series
Sample Input :
5
Sample Output : 30
 */

// solution:

 const getNthNumber = (n) => n < 1 ? "Error" : n*(n+1);


 // Driver program to test above functions
let ans = getNthNumber(5);
console.log(ans);