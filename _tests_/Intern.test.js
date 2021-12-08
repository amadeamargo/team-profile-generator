const Intern = require ("../lib/intern")

const testEmployee = new Intern ("Kim", 456789, "kim@email.com", "Northwestern")

describe ('Intern', () => {
    it(`should return role as Intern`, () => {
        expect (testEmployee.getRole()).toBe("Intern")
    });

    it(`should return school as Northwestern`, () => {
        expect (testEmployee.school).toBe("Northwestern")
    });
    
})