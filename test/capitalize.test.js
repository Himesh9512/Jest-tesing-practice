const capitalize = require("../js/capitalize");

describe("Capitalize", () => {
	test(" 'jest' should be 'Jest' ", () => {
		expect(capitalize("jest")).toMatch("Jest");
	});
	test(" 'test with space' should be 'Test with space' ", () => {
		expect(capitalize("test with space")).toBe("Test with space");
	});
	test(" 'UPPERCASE' should be 'UPPERCASE' ", () => {
		expect(capitalize("UPPERCASE")).toBe("UPPERCASE");
	});
});
