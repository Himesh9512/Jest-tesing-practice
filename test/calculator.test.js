const calculator = require("../js/calculator");

describe("calculator", () => {
	test(" 2 + 3 equal 5", () => {
		expect(calculator.add(2, 3)).toBe(5);
	});
	test("add should work with number in string format", () => {
		expect(calculator.add(7, "2")).toBe(9);
	});
	test(" 17 - 4 equal 13", () => {
		expect(calculator.subtract(17, 4)).toBe(13);
	});
	test("add should work with number in string format", () => {
		expect(calculator.subtract(5, "2")).toBe(3);
	});
	test(" 3 * 4 equal 12", () => {
		expect(calculator.multipy(3, 4)).toBe(12);
	});
	test("multipy should work with number in string format", () => {
		expect(calculator.multipy("5", "7")).toBe(35);
	});
	test(" 32 / 4 equal 8", () => {
		expect(calculator.divide(32, 4)).toBe(8);
	});
	test("divide should work with number in string format", () => {
		expect(calculator.divide("30", 6)).toBe(5);
	});
});
