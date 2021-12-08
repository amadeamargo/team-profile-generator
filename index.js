console.log("hello")

const manager = require ("./lib/manager")
const engineer = require ("./lib/engineer")
const intern = require ("./lib/intern")
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
        const manager = newManager (data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        addMenu();
    })
}

const Engineer = () => {
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
        const manager = newManager (data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        addMenu();
    })
}