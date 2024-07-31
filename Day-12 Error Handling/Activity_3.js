/*
  Activity 3: Custom Error Objects :-
      Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
      Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
*/

//  Task 1
// Step 1: Define the custom error class
class CustomError extends Error {
  constructor(message) {
      super(message);
      this.name = 'CustomError'; // Set the error name to the custom error class name
  }
}

// Step 2: Function that throws an instance of the custom error
function riskyOperation(shouldThrowCustomError) {
  try {
      console.log("In the try block...");
      if (shouldThrowCustomError) {
          throw new CustomError("This is a custom error!");
      }
      console.log("Operation succeeded.");
  } catch (error) {
      // Step 3: Handle the custom error
      if (error instanceof CustomError) {
          console.log("Caught a custom error:");
      } else {
          console.log("Caught a general error:");
      }
      console.log("Error name:", error.name);
      console.log("Error message:", error.message);
  } finally {
      console.log("In the finally block...");
      console.log("Cleanup or final steps.");
  }
}

riskyOperation(true);

// Task 2
function validation(str) {
  try {
    if(str) {
      console.log(`user name is valid: ${str}`);
    } else {
      throw new Error (`user name unvalid`);
    }
  } catch(err) {
    console.log(`error found: ${err.message}`);
  }
}

validation("gohan");
validation();