// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
function Intern(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getRole = function () {
        return "Intern";

    }
}

module.exports = Intern;