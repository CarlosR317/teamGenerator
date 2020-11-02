const employees = [];

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// This is for the manager's inquirer prompts
function managerCreation() {

    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the Team's Manager?",
            name: "name",
            default: "Manager's Name"
        },

        {
            type: "input",
            message: "What is the Team's Manager ID Number?",
            name: "id",
            default: "Manager's ID Number"
        },
        {
            type: "input",
            message: "What is the Team's Manager E-mail address?",
            name: "email",
            default: "manager@email.com"
        },
        {
            type: "input",
            message: "What is the Team's Manager Office Number?",
            name: "officeNumber",
            default: "Manager's Office Number"
        }
    ])

        .then((managerResponses) => {
            let manager = new Manager(managerResponses.name, managerResponses.id, managerResponses.email, managerResponses.officeNumber);

            employees.push(manager);

            employeeCreation();
        })
}
// This is for the Intern's inquirer prompts

function internCreation() {

    inquirer.prompt([{

        type: "input",
        message: "What is the name of the Intern?",
        name: "name",
        default: "Intern's Name"
    },
    {
        type: "input",
        message: "What is the Intern's ID Number?",
        name: "id",
        default: "Intern's ID Number"
    },
    {
        type: "input",
        message: "What is the Intern's E-mail?",
        name: "email",
        default: "intern@email.com"
    },
    {
        type: "input",
        message: "What is the name of the School the Intern is attending?",
        name: "school",
        default: "intern's School"
    }
    ])
    .then((internResponses) => {
        let intern = new Intern(internResponses.name, internResponses.id, internResponses.email, internResponses.school);

            employees.push(intern);

            employeeCreation();
    })
}

//This is for the engineer inquirer prompts
function engineerCreation() {

    inquirer.prompt([{

        type: "input",
        message: "What is the name of the Engineer?",
        name: "name",
        default: "Engineer's Name"
    },
    {
        type: "input",
        message: "What is the Engineer's ID Number?",
        name: "id",
        default: "Engineer's ID Number"
    },
    {
        type: "input",
        message: "What is the Engineer's E-mail?",
        name: "email",
        default: "Engineer@email.com"
    },
    {
        type: "input",
        message: "What is the name of the Engineer's Github account?",
        name: "github",
        default: "Engineer's Github account"
    }
    ])
    .then((engineerResponses) => {
        let engineer = new Engineer(engineerResponses.name, engineerResponses.id, engineerResponses.email, engineerResponses.school);

            employees.push(engineer);

            employeeCreation();
    })
}

managerCreation()

// gives the ability to add need employees
function employeeCreation() {
    
    inquirer.prompt([

        {
            type: "list",
            message: "Please select the type of Employee you wish to create.",
            name: "employeeSelection",
            choices: [
                "Engineer",
                "Intern",
                "No More Employees to add."
            ]
        }
    ])

        .then((selectionType) => {

            if(selectionType.employeeSelection === "Engineer") {

                engineerCreation()

            } else if (selectionType.employeeSelection === "Intern") {

                internCreation()

            } else {
                const html = render(employees);

                fs.writeFile(outputPath, html, err => {

                    if(err) {

                        return console.log(err);
                    };

                });
            }
        });
};

    // After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
