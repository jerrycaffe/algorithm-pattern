// The goal is to have an input of two arrays and check the second array if it contains all the element in array1 squared e.g [1,2] and [1,4] should return true as 1 squared will give us 1 and 2 squared gives 4 but [1, 2] and [1,6] is wrong or [1,2] and [4,4] is wrong because the second array does not represent all the squared values of array 1

// Naive solution The Big O nation is O(N^2)
function same(arr1, arr2){
  if(arr1.length !== arr2.length)return false;
  for(let i = 0; i<arr1.length; i++){ //first loop
    let correctIndex = arr2.indexOf(arr1[i] ** 2) //index of is another loop
    if(correctIndex === -1)return false;
  arr2.splice(correctIndex, 1)
  }
  return true;
}
same([1,2], [1,2]) //this will return false
same([1,2], [1,4]) //this returns true

function improved(arr1, arr2){
   if(arr1.length !== arr2.length)return false;
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){

    frequencyCounter1[val] =(frequencyCounter1[val] || 0) +1
  }
   for(let val of arr2){
     
    frequencyCounter2[val] =(frequencyCounter2[val] || 0) + 1
  }
   
   for(let key in frequencyCounter1){
     
     if(!(key ** 2 in frequencyCounter2))return false
     if(frequencyCounter2[key ** 2] !== frequencyCounter1[key])return false
  }
  return true;
}
improved([1,2], [1,4])
// improved([1,2], [1,3])