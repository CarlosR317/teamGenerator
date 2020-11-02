// This is the Intern class being defined and connected with Employee.js
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
    
    this.school = school;
    this.getRole = function () {
        return "Intern";

    }
}

module.exports = Intern;