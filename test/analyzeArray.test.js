const analyzeArray = require("../js/analyzeArray");

describe("analyzeArray", () => {
	test("function should return object with results", () => {
		expect(analyzeArray([2, 5, 8, 7, 3])).toStrictEqual({ average: 5, min: 2, max: 8, length: 5 });
	});
});
