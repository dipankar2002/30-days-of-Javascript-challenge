/*
  Activity 5: Concurrent Promises :-
      Task 8: Use 'Promise.all' to wait for multiple promises to resolve and then log all their values.
      Task 9: Use 'Promise.race' to log the value of the first promise that resolves among multiple promises.
*/

// task 1
const p_1 = Promise.resolve(100);
const p_2 = "Dip";
const p_3 = new Promise((resolve)=> {
  resolve(true);
})

try {
  Promise.all([p_1,p_2,p_3]).then((val)=> {
    console.log(val);
  })
} catch(error) {
  console.log(`error found: ${error}`);
}

// task 2
const promise_1 = new Promise((resolve)=> {
  setTimeout(resolve,2*1000,'one')
})
const promise_2 = new Promise((resolve)=> {
  setTimeout(resolve,1*1000,'two')
})
const promise_3 = new Promise((resolve)=> {
  setTimeout(resolve,5*1000,'three')
})
Promise.race([promise_1,promise_2,promise_3]).then((val)=> {
  console.log(val);
})