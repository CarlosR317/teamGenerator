// This is the Intern class being defined and connected with Employee.js
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email);    
    this.school = school;

    // gets the school
    this.getSchool = function () {
        return this.school
    };

    this.getRole = function () {
        return "Intern";
    };

}

};

module.exports = Intern;