// Big O noation of objects are 

// Insertion in js has 0(1) constant time as objects does not need order
// Removal as well 0(1)
// Searching has 0(N)
// Access 0(1) as one can directly call any part of the object

const obj = {
  firstName: "Jerry",
  lastName: "Ade",
  age: 20,
  
}

Object.keys(obj)  //the big O is O(N) as the keys grow the time to access it grows
Object.values(obj)  //the big O is O(N) as the values grow the time to access it grows
Object.entries(obj)  //the big O is O(N) 
obj.hasOwnProperty("firstName") //O(1) constant time