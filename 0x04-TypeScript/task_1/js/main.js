"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teacher3 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};
console.log(teacher3);
const director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
const printTeacher = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};
console.log(printTeacher("John", "Doe")); // J. Doe
class StudentClass {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return "Currently working";
    }
    displayName() {
        return this.firstName;
    }
}
// Example usage
const student1 = new StudentClass("Jane", "Smith");
console.log(student1.displayName()); // Jane
console.log(student1.workOnHomework()); // Currently working
//# sourceMappingURL=main.js.map