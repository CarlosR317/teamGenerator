// This is the manager class being defined and connected with Employee.js
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;

    // gets offices number
    this.getOfficeNumber =function () {
        return this.officeNumber
    };

    this.getRole = function () {
        return "Manager";
    };

}

};

module.exports = Manager;