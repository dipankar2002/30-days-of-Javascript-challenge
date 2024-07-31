/*
  Activity 4: Error Handling in Promises :-
      Task 6: Create a promise that randomly resolves or rejects. Use '.catch()' to handle the rejection and log an appropriate message to the console.
      Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
*/

// Task 1
function randomPromise() {
  return new Promise((resolve, reject) => {
    const randomNum = Math.random();

    if (randomNum < 0.5) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected!");
    }
  });
}

// randomPromise()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// randomPromise()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

// randomPromise()
//   .then(data => console.log(data))
//   .catch(error => console.error(error));


// task 2
console.log(`\n\ntask 2`);
const asyncFn = async (num) => {
  try {
    const data = await new Promise((resolve, reject) => {
      if(num>5) {
        resolve("data fetched");
      } else {
        const err = new Error ("data fetched failed");
        reject(err);
      }
    })
    console.log(data);
  } catch(err) {
    console.log(`error found: ${err.message}`);
  }
}

asyncFn(Math.floor(Math.random()*10));