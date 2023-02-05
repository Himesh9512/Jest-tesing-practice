const reverseString = require("../js/reverseString");

describe("reverseString", () => {
	test(" 'dance' should be reversed to 'ecnad' ", () => {
		expect(reverseString("dance")).toBe("ecnad");
	});
	test("testing string with spaces ", () => {
		expect(reverseString("holy cow")).toBe("woc yloh");
	});
});
