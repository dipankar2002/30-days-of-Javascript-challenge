/*
  Activity 3: Arrow Functions :-
      Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
      Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
*/

const sum = (n1,n2) => {
  return n1+n2;
}
const checkCharacter = (str,k) => {
  for(let i = 0; i < str.length; i++) {
    if(str[i] == k) {
      return true;
    }
  }
  return false;
}

console.log(`Sum is: ${sum(5,10)}`);
console.log(`String contains the char is: ${checkCharacter("dipankar","i")}`);