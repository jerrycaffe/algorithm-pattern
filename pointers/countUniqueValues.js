// Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. there can be negative numbers in the array, but it will always be sorted

function countUniqueValues(arr){
    if(arr.length === 0) return 0
    var i =0;
    // since i is starting from 0, j should start from a value next to i which is 1
    for(var j = 1; j<arr.length; j++){
        // if the value in the position of i is not equal to the value at the position of j
        // move i up and swap the position of i with j
        // e.g [1,1,1,1,2,2,2,3,3,3,4,4,4,5,5,6] if i = 1 and j= 2, set i = 2
        console.log(arr[i], arr[j], 'seeing the value of arr[i]')
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1
}



console.log(countUniqueValues([1,1,1,1,1,1,1,2])) //2
 

