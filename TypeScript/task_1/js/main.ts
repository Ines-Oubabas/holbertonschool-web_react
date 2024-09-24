// Define the Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;  // Index signature for additional properties
}

// Create a Teacher object
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false  // Example of additional property
};

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
    numberOfReports: number;  // New required field for Directors
}

// Create a Director object
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};

// Log the teacher and director information to the console
console.log(teacher3);
console.log(director1);

// Optionally, you can reuse the display function for both Teacher and Directors
function displayTeacher(teacher: Teacher): void {
    const body = document.querySelector('body');
    const table = document.createElement('table');
    const row = document.createElement('tr');

    // Create cells for first name and location
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = teacher.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = teacher.location;

    // Append cells to row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append row to table
    table.appendChild(row);

    // Append table to the body
    if (body) {
        body.appendChild(table);
    }
}

// Call the function to display the teacher and director information (optional)
displayTeacher(teacher3);  // Display the teacher info
displayTeacher(director1); // Display the director info

