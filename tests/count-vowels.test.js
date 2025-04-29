const countVowels = require('../count-vowels');

describe("countVowels", function() {
    test("Must take a string and return the number of vowels.", () => {
        expect(countVowels('hello')).toBe(2);
        expect(countVowels('alvyn')).toBe(1);
    });
 });