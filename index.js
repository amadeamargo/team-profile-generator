const Manager = require ("./lib/manager")
const Engineer = require ("./lib/engineer")
const Intern = require ("./lib/intern")
const renderHTML = require ("./src/renderHTML")

const fs = require("fs")
const inquirer = require ("inquirer")

let team = [];

const managerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Who is your team's manager?",
            validate: (data) => {
                if (data ===''){
                    return`Please enter manager's name`
                }
                return true
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID",
            validate: (data) => {
                if (data ===''){
                    return`Please enter manager's ID`
                }
                return true
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
            validate: (data) => {
                if (data ===''){
                    return`Please enter manager's email address`
                }
                return true
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Who is the manager's office number?",
            validate: (data) => {
                if (data ===''){
                    return`Please enter manager's office Number`
                }
                return true
            }
        }
    ]).then (data => {
        const manager = new Manager (data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        addEmployee();
    })
}

const engineerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter engineer's name",
            validate: (data) => {
                if (data ===''){
                    return `Input field cannot be left blank. Please enter engineer's name.`
                }
                return true
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter engineer's ID",
            validate: (data) => {
                if (data ===''){
                    return`Input field cannot be left blank. Please enter engineer's ID.`
                }
                return true
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter engineer's email address",
            validate: (data) => {
                if (data ===''){
                    return`Input field cannot be left blank. Please enter engineer's email address.`
                }
                return true
            }
        },
        {
            type: "input",
            name: "gitHub",
            message: "Please enter engineer's gitHub account",
            validate: (data) => {
                if (data ===''){
                    return`Input field cannot be left blank. Please enter engineer's gitHub account.`
                }
                return true
            }
        }
    ]).then (data => {
        const engineer = new Engineer (data.name, data.id, data.email, data.gitHub);
        team.push(engineer);
        addEmployee();
    })
}

const internPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter intern's name",
            validate: (data) => {
                if (data ===''){
                    return `Input field cannot be left blank. Please enter intern's name.`
                }
                return true
            }
        },
        {
            type: "input",
            name: "id",
            message: "Please enter intern's ID",
            validate: (data) => {
                if (data ===''){
                    return`Input field cannot be left blank. Please enter intern's ID.`
                }
                return true
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter intern's email address",
            validate: (data) => {
                if (data ===''){
                    return`Input field cannot be left blank. Please enter intern's email address.`
                }
                return true
            }
        },
        {
            type: "input",
            name: "school",
            message: "Please enter name of intern's school",
            validate: (data) => {
                if (data ===''){
                    return`Input field cannot be left blank. Please enter name of intern's school.`
                }
                return true
            }
        }
    ]).then (data => {
        const intern = new Intern (data.name, data.id, data.email, data.school);
        team.push(intern);
        addEmployee();
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "newEmployee",
            message: "Add a new employee?",
            choices: [
                "Engineer",
                "Intern",
                "Completed employee list"
            ]
        }
    ]).then (data => {
        switch (data.newEmployee){
            case "Engineer":
                engineerPrompt();
                break;
                case "Intern":
                internPrompt();
                break;
                case "Completed cmploye list":
                    console.log(team);
                    let html = renderHTML (team);
                    fs.writeFile(".dist/index.html", html, (err)=>
                    err ? console.log(err) : console.log(`HTML file created`))
                    break;
        }
    })
}

managerPrompt();

