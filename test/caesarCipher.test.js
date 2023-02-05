const caesarChiper = require("../js/caesarCipher");

describe("caeserChiper", () => {
	test("zebra should be encrypted to 'afcsb' ", () => {
		expect(caesarChiper("zebra", 1)).toBe("afcsb");
	});
	test("spaces should be ignored while encrypting", () => {
		expect(caesarChiper("highly secured", 13)).toBe("uvtuyl frpherq");
	});
});
