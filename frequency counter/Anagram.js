// Anagram this pattern ensures the use of objects in comparing array instead of using nested loops in other to improve the big o notation

function validAnagram(first, second){
  if(first.length !== second.length)return false;
 
  
  const lookup = {};
  for(let i = 0; i < first.length; i++){
    let letter = first[i];
//     if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  console.log(lookup)
  }
  for(let i = 0; i < second.length; i++){
    let letter = second[i];
//     cant find letter or letter is zero then it is not an anagram
    if(!lookup[letter]){
      return false;
    }else{ lookup[letter] -=1}
  }
  return true;
}

validAnagram('anagram', 'anagrma')