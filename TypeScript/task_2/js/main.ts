// Define the DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Create a class Director that implements DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Create a class Teacher that implements TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Function to create employees
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Function to append content to the body
function appendToBody(content: string): void {
  const body = document.querySelector('body');
  if (body) {
    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    body.appendChild(paragraph);
  }
}

// Log and display the results of createEmployee
console.log(createEmployee(200));
appendToBody(createEmployee(200).constructor.name);

console.log(createEmployee(1000));
appendToBody(createEmployee(1000).constructor.name);

console.log(createEmployee('$500'));
appendToBody(createEmployee('$500').constructor.name);
