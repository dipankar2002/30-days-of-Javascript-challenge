/*
  Activity 1: Object Creation and Access :-
      Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
      Task 2: Access and log the title and author properties of the book object.
*/

const book = {
  title: "Bhagavad Gita as it is",
  author: "A.C.Bhaktivedanta Swami Prabhupada",
  year: 2010
}
console.log(book);

console.log(`Book Title: ${book["title"]}\nBook author: ${book["author"]}`);