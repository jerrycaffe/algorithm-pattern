// Creating pointers or values that correspoind to an index or position and move towards the beginning, end or middle based on a certain condition. it is very efficient for solving problems with minimal space compexity

// e.g
// write a function called sumzero which accepts a sorted array of integers. the function should find the first pair where the sum is 0. Retyrn an array that includes both values that sum to zero or undefined if a pair does not exist

//  Solution

// Naive solution
function sumZeroNaive(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]];
      }
    }
  }
}




sumZeroNaive([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZeroNaive([-2, 0, 1, 3]) //undefined
sumZeroNaive([1,2,3]) //undefined


function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){return [arr[left], arr[right]]}
    else if(sum > 0){
      right--;
    }
    else{left++}
  }
}




sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) //undefined
sumZero([1,2,3]) //undefined
