// This is the Intern class being defined and connected with Employee.js
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    this.officeNumber = officeNumber;
    this.getRole = function () {
        return "Manager";

    }
}
const manager1 = new manager("35")

module.exports = Manager;