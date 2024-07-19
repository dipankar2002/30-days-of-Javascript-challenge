/*
  Activity 2: Array Methods (Basic) :-
      Task 3: Use the 'push' method to add a new number to the end of the array and log the updated array.
      Task 4: Use the 'pop' method to remove the last element from the array and log the updated array.
      Task 5: Use the 'shift' method to remove the first element from the array and log the updated array.
      Task 6: Use the 'unshift' method to add a new number to the beginning of the array and log the updated array.
*/

let arr = [1,2,3];

const push = (num) => {
  arr.push(num);
  return `new pushed array: ${arr}`;
}
function pop() {
  arr.pop();
  return `new poped array: ${arr}`;
}
function shift() {
  arr.shift();
  return `new shifted array: ${arr}`;
}
function unshift() {
  arr.unshift(0);
  return `new unshifted array: ${arr}`;
}

console.log(`\n${push(4)}\n${pop()}\n${shift()}\n${unshift()}`);