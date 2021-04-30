// A recursion is a process (a function) that calls itself
// JSON.parse/JSON,stringify is an example of calling a recursive functions
// document.getElementById and dom traversal algorithms are examples of recursive function
// Object traversal
// Used in more data structures
// cleaner alternative to iteration

// JAVASCRIPT CALL STACK
// when a functionm is invoked it is places (pushed) on the top of the call stack
// when JS engine sees the return keyword or when the function ends, the compiler will remove (pop) the function from the stack

// Important concepts about recursion

//1. BASE CASE
// The condition where the recusion stops

// 2. Differemt Input


// EXAMPLE
function countDown(num){
    if (num <= 0){ console.log("All Done!")  
        return};
        console.log(num);
        num--;
        countDown(num)
}