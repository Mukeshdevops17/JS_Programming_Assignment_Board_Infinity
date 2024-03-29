/*PROBLEM 10
Loki wants to steal the tesseract but in order to do so, he has to rearrange the elements
in an array in a specific manner which is mentioned in a clue. The clue says ‘cursed
are the odd and sorted are the even’. Loki manages to decode the clue which translates
to “sort the even positioned elements of an array, starting from the element at index 0,
in ascending order”. Manipulate the array so as to help Loki steal the tesseract.
Input Description: ꢀ
Size of the array followed by the elements of the array
Output Description: ꢀ
Even index array elements sorted in ascending order
Sample Input :
5
3 9 1 44 6
Sample Output :
1 9 3 44 6 */

// solution:
// input:  1. array = an array of number,  
//         2.  n= size of array.

function sortEvenArray(array, n){
    let evenArr=[];
    let oddArr=[];
    let result =[];
    for(let i=0; i<=n; i++){
        if(i%2 == 0){
evenArr.push(array[i]);
        }else{
            oddArr.push(array[i]);
        }
    }
    evenArr.sort((a,b)=>a-b);
    for(let i=0;i<n;i++){
        if(i%2 ==0){
            result.push(evenArr.shift())
        }else(
            result.push(oddArr.shift()) 
        )

    }
    return result;
}


// Driver program to test above functions
let ans = sortEvenArray([3,9,1,44,6],5);
console.log(ans);
