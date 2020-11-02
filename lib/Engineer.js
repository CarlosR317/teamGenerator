// This is the Engineer class being defined and connected with Employee.js
const Employee = require("./Employee");

class Engineer extends Employee { 
    constructor(name, id, email, github) {
    super(name,id,email);
    this.github = github;

    // gets the github account
    this.getGithub =function() {
        return this.github
    };

    // gets the role
    this.getRole = function() {
        return "Engineer";
    };

}

};

module.exports = Engineer;