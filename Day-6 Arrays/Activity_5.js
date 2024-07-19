/*
  Activity 5: Multi-dimensional Arrays :-
      Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
      Task 13: Access and log a specific element from the two-dimensional array.
*/

let arr = [[1,2,3],[4,5,6],[7,8,9]];

function twoDArray() {
  console.log(`With forEach`);
  arr.forEach((val) => {
    console.log(val);
  })
  console.log(`with for loop`);
  for(let i = 0; i < arr.length; i++) {
    for(let k = 0; k < arr[i].length; k++) {
      console.log(arr[i][k]);
    }
    console.log(``);
  }
  arr.forEach(row => {
    console.log(row.join(' '));
  });
}

twoDArray();