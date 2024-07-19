/*
  Activity 3: Nested Objects :-
      Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
      Task 6: Access and log the name of the library and the titles of all the books in the library.
*/

const library = {
  name: "Central Library",
  books: [
    { title: "Bhagavad Gita as it is", author: "A.C.Bhaktivedanta Swami Prabhupada", year: 2010 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Moby Dick", author: "Herman Melville", year: 1851 }
  ]
};
console.log(library);

let booksArr = library.books;
console.log(`Name of the Library is: ${library.name}\nand all books name is:/n`);
for(let i = 0; i < booksArr.length; i++) {
  console.log(`${i+1}: ${booksArr[i].title}`);
}