/* PROBLEM 8
- Let "A" be a string. Remove all the whitespaces and find it's length.
(Print "Error" if N = negative value and 0 if N = 0).
Input Description: ꢀ
A string is provide as an input
Output Description: ꢀ
Remove all the whitespaces and then print the length of the remaining string.
Sample Input :
Lorem Ipsum
Sample Output :
10   */

// Solution:

const getStringLength = (string) => string == "" ? "Error" : string.split(' ').join("").length;


// Driver program to test above functions
let ans = getStringLength('Lorem Ipsum');
console.log(ans);



/*Doubt: In the question the given statement " (Print "Error" if N = negative value and 0 if N = 0) ".
What is the role of "N" here because as per question "Let "A" be a string" i.e. we are entering a string "A"  here
. Is it mistekenly added or what ? */
