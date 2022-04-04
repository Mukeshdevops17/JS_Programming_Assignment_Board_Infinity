/*PROBLEM 6
Write a code to get an integer N and print the sum of values from 1 to N.
Input Description: ꢀ
A single line contains an integer N.
Output Description: ꢀ
Print the sum of values from 1 to N.
Sample Input :
10
Sample Output : 55    */

// solution:

const getSum = (number) => number < 2 ? 'Enter a positive number' : number * (number + 1) / 2;

// Driver program to test above functions
let ans = getSum(10);
console.log(ans);