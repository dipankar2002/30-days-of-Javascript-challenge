/*
  Activity 4: Module Pattern :-
      Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
*/

function module() {
  let collection = [];

  return {
    add: (item) => {
      collection.push(item);
      return `${item} added`;
    },
    remove: (item) => {
      const index = collection.indexOf(item);
      collection.splice(index,1);
      return `${item} removed`;
    },
    list: () => {
      return collection;
    }
  }
}

const itemManager = module();

console.log(itemManager.add('apple'));
console.log(itemManager.add('bannana'));
console.log(itemManager.add('orange'));
console.log(itemManager.add('pinaple'));
console.log(itemManager.list());
console.log(itemManager.remove('apple'));
console.log(itemManager.remove('pinaple'));
console.log(itemManager.list());
