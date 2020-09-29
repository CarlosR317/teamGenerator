// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
function Engineer(github) {
    // this.name = name;
    // this.id = id;
    // this.email = email;
    this.github = github;
    this.getRole = function() {
        return "Engineer";

    }
}

const engineer2 = new Engineer("micheal45")

module.exports = Engineer;