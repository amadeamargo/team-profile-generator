const Engineer = require ("../lib/engineer")

const testEmployee = new Engineer ("Joe", 234432, "joe@email.com", "joep")

describe ('Engineer', () => {
    it(`should return role as Engineer`, () => {
        expect (testEmployee.getRole()).toBe("Engineer")
    });

    it(`should return github as joep`, () => {
        expect (testEmployee.github).toBe("joep")
    });
    
})