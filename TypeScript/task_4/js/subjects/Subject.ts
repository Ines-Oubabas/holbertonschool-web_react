import { Teacher } from './Teacher';

export class Subject {
  teacher: Teacher;

  constructor(teacher: Teacher) {
    this.teacher = teacher;
  }

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }
}
