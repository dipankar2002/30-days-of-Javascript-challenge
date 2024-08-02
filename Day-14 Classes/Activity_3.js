/*
  Activity 3: Static Methods and Properties :-
      Task 5: Add a static method to the 'Person' class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
      Task 6: Add a static property to the 'Student' class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
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
  static staticMethod() {
    console.log(`this is a static method call by class name`);
  }
}
class Student extends Person {
  static studentCount = 0;
  constructor(name) {
    super();
    this.name = name;
    Student.studentCount++;
    console.log(`Total number of students: ${Student.studentCount}`);
  }
}

Person.staticMethod();

const student1 = new Student("Alice");
const student2 = new Student("Bob");
const student3 = new Student("Charlie");
const student4 = new Student("Dipankar");