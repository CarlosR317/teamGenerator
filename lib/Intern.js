// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
function Intern(school) {
//    is this needed
    // this.name = name;
    // this.id = id;
    // this.email = email;
    this.school = school;
    this.getRole = function () {
        return "Intern";

    }
}

module.exports = Intern;