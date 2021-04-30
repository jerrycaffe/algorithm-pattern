//Naive Aporoach
function maxSubArraySub(arr, num){
    if(num > arr.length) return null;
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++){
temp = 0;
for(let j = 0; j < num; j++){
    temp += arr[i + j];
}
if(temp > max){ max = temp;}
    }
    return max;
}

function maxSubArrayGood(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i- num] + arr[i];
        console.log(tempSum, 'temp')
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}

console.log(maxSubArraySub([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubArrayGood([1,2,5,2,8,1,5], 2)) // 10