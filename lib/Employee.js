// TODO: Write code to define and export the Employee class
class Employee { constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getRole = function() {
        return "Employee";

    }
}}

const employee1 = new Employee ("Kelly",1, "Kelly85@email.com")
const employee2 = new Employee ("Micheal",2, "Michal78@email.com")
const employee3 = new Employee ("Lynn",3, "Lynn24@email.com")
const employee4 = new Employee ("Payton",4, "Payton@email.com")

module.exports = Employee;