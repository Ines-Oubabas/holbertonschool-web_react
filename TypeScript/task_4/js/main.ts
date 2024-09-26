import { Cpp } from './subjects/Cpp';
import { Java } from './subjects/Java';
import { React } from './subjects/React';
import { Teacher } from './subjects/Teacher';

const cppTeacher: Teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 };
const cpp = new Cpp(cppTeacher);

console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const javaTeacher: Teacher = { firstName: 'Jane', lastName: 'Smith', experienceTeachingJava: 5 };
const java = new Java(javaTeacher);

console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

const reactTeacher: Teacher = { firstName: 'Bob', lastName: 'Jones', experienceTeachingReact: 2 };
const react = new React(reactTeacher);

console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
