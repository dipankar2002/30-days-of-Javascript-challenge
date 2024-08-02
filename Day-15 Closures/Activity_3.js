/*
  Activity 3: Closures in Loops :-
      Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
*/

let arr = [];

for(let i = 0; i < 5; i++) {
  arr.push(()=>{
    const index = i;
    return ()=>{
      return `index = ${index}`
    }
  });
}

arr.forEach((element) => {
  const val = element();
  console.log(val());
})
