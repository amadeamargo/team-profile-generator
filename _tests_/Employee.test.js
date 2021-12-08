const Employee = require ("../lib/employee")

const testEmployee = new Employee ("Bob", 123456, "bob@email.com")

describe ('Employee', () => {
    it(`should return name as Bob`, () => {
        expect (testEmployee.name).toBe("Bob")
    });

    it(`should return ID as 123456`, () => {
        expect (testEmployee.id).toBe(123456)
    });

    it(`should return email as bob@email.com`, () => {
        expect (testEmployee.email).toBe("bob@email.com")
    });

    it(`should return role as Employee`, () => {
        expect (testEmployee.getRole()).toBe("Employee")
    });
    
})