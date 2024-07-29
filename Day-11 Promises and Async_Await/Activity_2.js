/*
  Activity 2: Chaining Promises :-
      Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
*/

const promis = (message) => {
  return new Promise((resolv) => {
    console.log(message);
    resolv();
  })
}

promis("hello").then(()=> {
  promis("dip");
}).then(()=> {
  promis("dipankar");
}).then(()=> {
  promis("gohan");
})