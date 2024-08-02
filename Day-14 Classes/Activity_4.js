/*
  Activity 4: Getters and Setters :-
      Task 7: Add a getter method to the 'Person' class to return the full name (assume a 'firstName' and 'lastName' property). Create an instance and log the full name using the getter.
      Task 8: Add a setter method to the 'Person' class to update the name properties ('firstName' and 'lastName'). Update the name using the setter and log the updated full name.
*/

class Person {
  constructor(Fname,Lname) {
    this.Fname = Fname;
    this.Lname = Lname;
  }
  get name() {
    return `hello ${this.Fname} ${this.Lname}`;
  }
  set name(name) {
    this.Fname = name;
    this.Lname = '';
  }
}

const obj = new Person('Dip','Ganguly');
console.log(obj.name);
obj.name = 'GoHANN15';
console.log(obj.name);