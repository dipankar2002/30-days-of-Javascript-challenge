/*
  Activity 1: Understanding Promises :-
      Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
      Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using '.catch()'.
*/

// task 1
function promise_1() {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      resolve();
    },2*1000);
  })
}
function res() {
  console.log(`hello`);
}

// task 2
function promise_2() {
  return new Promise((resolve, reject) => {
    const err = new Error(`error found`)
    setTimeout(() => {
        reject(err);
    }, 2*1000);
  });
}

promise_1().then(res);
promise_2().catch((error) => {
  console.log(error.message);
});


// function promise_2() {
//   return new Promise((resolve,reject)=> {
//     try {
//       resolve();
//     } catch(err) {
//       setTimeout(()=> {
//         try {
//           resolve();
//         } catch(err) {
//           reject(err);
//         }
//       },2*1000);
//     }
//   })
// }
// function resol() {
//   console.log(hello);
// }
// function rejec(errData) {
//   console.log(`error found`);
// }

