/*
  Activity 3: Using Async/Await :-
      Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
      Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
*/

// Task 1
async function awaitFunc_1(promise) {
  console.log(`before sum print`);
  const data = await promise;
  console.log(`after sum print`);
}

function promise_1() {
  return new Promise((resolve)=>{
    const sum = 2 + 5;
    resolve(sum);
  })
}
function display_1(data) {
  console.log(`sum data is: ${data}`);
}

const args1 = promise_1().then(display_1);
awaitFunc_1(args1);

// Task 2
async function awaitFunc_2(promise) {
  try {
    const data = await promise;
    console.log(`successfull`);
} catch(error) {
  console.log(`unsuccessfull`);
  console.error(`error found: ${error} `);
}
}

function promise_2() {
  return new Promise((resolve)=>{
    // const sum = 2 + 5;
    resolve(sum);
  })
}
function display_2(data) {
  console.log(`sum data is: ${data}`);
}

const args2 = promise_2().then(display_2);
awaitFunc_2(args2);