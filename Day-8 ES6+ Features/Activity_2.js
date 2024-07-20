/*
  Activity 2: Destructuring :-
      Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
      Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
*/

let arr = [1,2,3,4,5];
let [a,b,c,d,...rest] = arr;

console.log(`first element ${a} and second element ${rest}`);

const book = {
  title: "Bhagavad Gita as it is",
  author: "A.C.Bhaktivedanta Swami Prabhupada",
  year: 2010
}

const {title,author} = book;

console.log(`book title is ${title} and author is ${author}`);