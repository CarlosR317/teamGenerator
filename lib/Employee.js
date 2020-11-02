// This is the Employee class being defined. properties: name,id,email share among all team members 
function Employee (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;

    // gets the name and returns it
    this.getName = function() {
        return this.name;
    };

    // gets the id and returns it
    this.getId = function() {
        return this.id;
    };

    // gets the email and returns it
    this.getEmail = function() {
        return this.email;
    };

    // gets the role and returns it
    this.getRole = function() {
        return "Employee";

    };
    
};

module.exports = Employee;