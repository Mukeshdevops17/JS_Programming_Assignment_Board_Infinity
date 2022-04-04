/*PROBLEM 4
You will be provided with a number. Print the number of days in the month
corresponding to that number.
Note: In case the input is February, print 28 days. If the Input is not in valid range
print "Error".
Input Description: ꢀ
Input n -> month number
Output Description: ꢀ
Find the days in the month corresponding to the input number. Print Error if the input
is not in a valid range.
Sample Input :
8
Sample Output :
31  */

// Solution:

function dayCount(number) {
    if (0 < number && number <= 12) {
        let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        let previousIndex = number - 1
        return days[previousIndex]
    } else {
        return "Error"
    }
}

// Driver program to test above functions
let ans = dayCount(8);
console.log(ans);