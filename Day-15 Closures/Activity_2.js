/*
  Activity 2: Practical Closures :-
      Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
      Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
*/

const generatedID = () => {
  let uniID = 0;
  return () => {
    uniID += 1;
    return uniID;
  }
}
const id = generatedID();
console.log(id());
console.log(id());
console.log(id());
console.log(id());

const capturesUserName = (name) => {
  return () => {
    return `hello ${name}`
  }
}

const user1 = capturesUserName('dip');
const user2 = capturesUserName('dipankar');
const user3 = capturesUserName('gohan');

console.log(user1());
console.log(user2());
console.log(user3());