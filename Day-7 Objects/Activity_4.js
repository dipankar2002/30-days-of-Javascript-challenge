/*
  Activity 4: The 'this' Keyword :-
      Task 7: Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year, and log the result of calling this method.
*/

const book = {
  title: "Bhagavad Gita as it is",
  author: "A.C.Bhaktivedanta Swami Prabhupada",
  year: 2010,
  returnString: function() {
    return `book name is ${this.title} and year ${this.year}`
  }
}

console.log(book.returnString());