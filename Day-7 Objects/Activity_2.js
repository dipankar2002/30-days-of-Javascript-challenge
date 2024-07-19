/*
  Activity 2: Object Methods :-
      Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
      Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
*/

let book = {
  title: "Bhagavad Gita as it is",
  author: "A.C.Bhaktivedanta Swami Prabhupada",
  year: 2010
}
const method1 = (title,author) => {
  return `Book Title: ${title}\nBook author: ${author}`
}
const method2 = (ye) => {
  book.year = ye;
  return `book year updated`;
}

console.log(`method1: ${method1(book.title,book.author)}`);
console.log(`method2: ${method2(2002)}\n${book}`);