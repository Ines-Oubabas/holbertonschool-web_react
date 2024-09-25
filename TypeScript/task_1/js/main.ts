// Interface pour Teacher
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;  // Index signature for additional properties
}

// Interface Directors qui étend Teacher
interface Directors extends Teacher {
    numberOfReports: number;  // New required field for Directors
}

// Création d'un objet Teacher
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false  // Exemple d'une propriété supplémentaire
};

// Création d'un objet Director
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};

// Fonction pour afficher les informations d'un Teacher ou Director
function displayTeacher(teacher: Teacher): void {
    const body = document.querySelector('body');
    const table = document.createElement('table');
    const row = document.createElement('tr');

    // Créer des cellules pour le prénom et la localisation
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = `${teacher.firstName.charAt(0)}.`;  // Utilise l'initiale du prénom

    const locationCell = document.createElement('td');
    locationCell.textContent = teacher.location;

    // Ajouter les cellules à la ligne
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Ajouter la ligne au tableau
    table.appendChild(row);

    // Ajouter le tableau au body
    if (body) {
        body.appendChild(table);
    }
}

// Afficher les informations des objets Teacher et Director
displayTeacher(teacher3);  // Affiche les informations de teacher3
displayTeacher(director1); // Affiche les informations de director1

// Interface pour la fonction printTeacher
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implémentation de la fonction printTeacher
const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Test de la fonction printTeacher
console.log(printTeacher("John", "Doe"));  // Affiche : "J. Doe"

// Interface pour le constructeur de StudentClass
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface pour la classe StudentClass
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

// Classe StudentClass qui implémente l'interface StudentClassInterface
class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Méthode qui retourne "Currently working"
    workOnHomework(): string {
        return "Currently working";
    }

    // Méthode qui retourne le prénom (firstName)
    displayName(): string {
        return this.firstName;
    }
}

// Test de la classe StudentClass
const student = new StudentClass("John", "Doe");

console.log(student.displayName());  // Affiche : "John"
console.log(student.workOnHomework());  // Affiche : "Currently working"

