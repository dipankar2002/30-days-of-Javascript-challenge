/*
  Activity 3: Switch Case :-
      Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
      Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
*/

function day(num) {
  switch(num) {
    case 1: return "Monday";
    break;
    case 2: return "Tuesday";
    break;
    case 3: return "Wednesday";
    break;
    case 4: return "Thursday";
    break;
    case 5: return "Friday";
    break;
    case 6: return "Saturday";
    break;
    case 7: return "Sunday";
    break;
    default: return "invalid number not between (1-7)";
  }
}
function grade(score) {
  switch(score) {
    case (score>=90 && score<=100): return 'A';
    break;
    case (score>=80 && score<90): return 'B';
    break;
    case (score>=60 && score<80): return 'C';
    break;
    case (score>=40 && score<60): return 'D';
    break;
    case (score<40): return 'F';
    break;
    default: return "invalid score not between (1-100)";
  }
}

console.log(`day is ${day(1)}`);
console.log(`grade is ${grade(80)}`);