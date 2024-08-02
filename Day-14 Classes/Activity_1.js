/*
  Activity 1: Class Definition :-
      Task 1: Define a class 'Person' with properties 'name' and 'age', and a method to return a greeting message. Create an instance of the class and log the greeting message.
      Task 2: Add a method to the 'Person' class that updates the age property and logs the updated age.
*/

class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  show() {
    console.log(`Hello ${this.name} age is: ${this.age}`);
  }
  updateAge() {
    this.age += 1;
    console.log(`updated age is: ${this.age}`);
  }
}

const obj = new Person("dip",21);
obj.show();
obj.updateAge();

