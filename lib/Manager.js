// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
function Manager(officeNumber) {
    this.officeNumber = officeNumber;
    this.getRole = function () {
        return "Manager";

    }
}
const manager1 = new manager("35")

module.exports = Manager;