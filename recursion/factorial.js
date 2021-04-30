// Factorial Naive
function factorials(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i;
    }
    return total;
}

console.log(factorials(100))
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1)
}

console.log(factorial(1000))