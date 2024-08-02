/*
  Activity 2: Class Inheritance :-
      Task 3: Define a class 'Student' that extends the 'Person' class. Add a property 'studentID' and a method to return the student ID. Create an instance of the 'Student' class and log the student ID.
      Task 4: Override the greeting method in the 'Student' class to include the student ID in the message. Log the overridden greeting message.
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

class Student extends Person {
  constructor(name,age,studentId) {
    super(name,age);
    this.studentId = studentId;
  }
  show() {
    console.log(`student id ${this.studentId}`);
  }
}

const obj = new Student("dip",21,74);
obj.show();
obj.updateAge();