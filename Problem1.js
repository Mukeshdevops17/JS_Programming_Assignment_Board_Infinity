/*PROBLEM 1
You are provided with a number, "N". Find its factorial.
Input Description: ꢀ
A positive integer is provided as an input.
Output Description: ꢀ
Print the factorial of the integer.
Sample Input :
5
Sample Output :
120 */

// solution:

function factorial(number) {
    //edge case
    if (number < 0) {
        return "enter a positive number";
    } else if (number === 0) {
        return 1;
    } else {
        let answer = 1;
        for (let i = 1; i <= number; i++) {
            answer *= i;
        }
        return answer;
    }
}


// Driver program to test above functions
let ans = factorial(5);
console.log(ans);


