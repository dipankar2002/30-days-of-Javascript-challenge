/*
  Activity 2: Finally Block :-
      Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
*/

function fn1(num) {
  const squar = num * num;
  try {
    console.log(squar);
  } catch(err) {
    console.log(`error found: ${err.message}`);
  } finally {
    console.log(`the finally block executed`);
  }
}

fn1(5)