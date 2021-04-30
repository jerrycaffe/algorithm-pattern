// This pattern involves diving a data set into smaller chunks and then repeating a proess with a subset of data.
// This pattern can tremdously decrease time complexity

// EXAMPLE
// QUESTION
// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. if the value is not found return -1.

// NAIVE SOLUTION (LINEAR SEARCH) TIME COMPLEXITY IS 0(N)

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
        return i;
    }
  }
  return -1
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 4)); //should return 3
console.log(search([1, 2, 3, 4, 5, 6, 7], 6)); //should return 5
console.log(search([1, 2, 3, 4, 5, 6, 7], 11)); //should return -1


function binarySearch(arr, val){
    let min = 0;
    let max = arr.length -1;

    while(min <= max){
        let middle = Math.floor((min + max)/2);
        let currentElement = arr[middle]
        if(arr[middle] < val){
            max = middle - 1;
        } else if(arr[middle] > val){
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 11), 'binary here') //should give -1