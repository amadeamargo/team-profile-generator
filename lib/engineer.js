/*
extend employee
github - Github usernmae
getGithub()
getRole -- Engineer
*/

const employee = require("./employee")

class Engineer extends Employee {
    constructor (name, id, email, github){
        super (name, id, email)
        this.github = github;
    }
    getRole(){
        return "Engineer";
    }
    getGithub(){
        return this.github;
    }
}

module.exports = engineer;