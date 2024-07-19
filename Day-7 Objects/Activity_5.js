/*
  Activity 5: Object Iteration :-
      Task 8: Use a 'for...in' loop to iterate over the properties of the book object and log each property and its value.
      Task 9: Use 'Object.keys' and 'Object.values' methods to log all the keys and values of the book object.
*/

const book = {
  title: "Bhagavad Gita as it is",
  author: "A.C.Bhaktivedanta Swami Prabhupada",
  year: 2010
}

function for_in() {
  for(let x in book) {
    console.log(`${book[x]}`);
  }
}
function objectMethods() {
  console.log(Object.keys(book));
  console.log(Object.values(book));
}

for_in();
objectMethods();