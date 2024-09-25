interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Functions for Part 6
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
    displayResult(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
    displayResult(employee.workTeacherTasks());
  }
}

// Function for Part 7
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// Utility function to display results in the body of the page
function displayResult(result: string): void {
  const body = document.querySelector('body');
  const p = document.createElement('p');
  p.textContent = result;
  if (body) {
    body.appendChild(p);
  }
}

// Testing Part 5
const employee1 = createEmployee(200);
const employee2 = createEmployee(1000);
const employee3 = createEmployee('$500');

console.log(employee1);
console.log(employee2);
console.log(employee3);

executeWork(employee1);
executeWork(employee2);
executeWork(employee3);

// Testing Part 7
console.log(teachClass('Math'));
console.log(teachClass('History'));

displayResult(teachClass('Math'));
displayResult(teachClass('History'));

