/*PROBLEM 11
- Given an array of N elements.find the number of occurences of each character and
print it in the decreasing order of occurences, if 2 or more number occurs the same
number of times, print the numbers in decreasing order.
Input Size : |N| <= 100000ꢀ
Sample Testcase :
INPUT
5
3 3 4 4 7 8
OUTPUT
4 3 8 7   */


// solution:

function sortByOccurences(arr) {
    // create a empty map
    let map = new Map();
    // set the element wrt occurance in map
    for(let n of arr){
        map.set(n, (map.get(n) || 0) + 1)
      };
    // assign the map entries to newArray
    let newArray = [...map];
    //sort the elements in decending order
    newArray.sort((a, b) => (b[0] - a[0]));
    //sort the occurence in decending order
    newArray.sort((a, b) => (b[1] - a[1]));
    //map all the elements in result
    let result = newArray.map(x => x[0]);
    return result;
}

let arr = [3, 3, 4, 4, 7, 8]
console.log(sortByOccurences(arr));