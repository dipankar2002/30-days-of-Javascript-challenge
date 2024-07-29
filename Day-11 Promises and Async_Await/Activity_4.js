/*
  Activity 4: Fetching Data from an API :-
      Task 6: Use the 'fetch' API to get data from a public API and log the response data to the console using promises.
      Task 7: Use the 'fetch' API to get data from a public API and log the response data to the console using async/await.
*/

// task 1
function response_1(data) {
  console.log(`fetch api using promise`);
  console.log(data);
  console.log(`fetch done`);
}
function callback_1(resp) {
  resp.json().then(response_1);
}
function promise_1() {
  return new Promise((resolve)=>{
    const data = fetch('https://api.restful-api.dev/objects?id=3&id=5&id=10').then(callback_1);
  });
}
// promise_1();

// task 2
function response_2(data) {
  console.log(`fetch api using async await`);
  console.log(data);
  console.log(`fetch done`);
}
function callback_2(resp) {
  resp.json().then(response_2);
}

async function awaitFunc_1() {
  const data = await fetch('https://api.restful-api.dev/objects').then(callback_2);
  console.log(`afasf`);
}
awaitFunc_1();