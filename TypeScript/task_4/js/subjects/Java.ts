import { Teacher } from './Teacher';
import { Subject } from './Subject';

export class Java extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }

  getAvailableTeacher(): string {
    if (!this.teacher.experienceTeachingJava) {
      return 'No available teacher';
    }
    return `Available Teacher: ${this.teacher.firstName}`;
  }
}
