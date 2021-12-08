const Manager = require ("../lib/manager")

const testEmployee = new Manager ("Bob", 123456, "bob@email.com", 123456789)

describe ('Manager', () => {
    it(`should return role as Manager`, () => {
        expect (testEmployee.getRole()).toBe("Manager")
    });

    it(`should return office number as 123456789`, () => {
        expect (testEmployee.officeNumber).toBe(123456789)
    });
    
})