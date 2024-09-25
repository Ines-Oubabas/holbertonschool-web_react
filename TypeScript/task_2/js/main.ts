// DirectorInterface avec les 3 méthodes
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// TeacherInterface avec les 3 méthodes
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Classe Director qui implémente DirectorInterface
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

// Classe Teacher qui implémente TeacherInterface
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

// Fonction createEmployee
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Fonction isDirector pour vérifier si un employé est un directeur
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// Fonction executeWork pour appeler la tâche appropriée en fonction de l'employé
function executeWork(employee: Director | Teacher): void {
    const resultElement = document.createElement('p');  // Créer un élément <p>
    if (isDirector(employee)) {
        resultElement.textContent = employee.workDirectorTasks();
    } else {
        resultElement.textContent = employee.workTeacherTasks();
    }
    document.body.appendChild(resultElement);  // Ajouter l'élément <p> au body
}

// Tests
executeWork(createEmployee(200)); // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks
executeWork(createEmployee('$500')); // Getting to director tasks
