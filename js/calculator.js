const calculator = (() => {
	function add(a, b) {
		return parseInt(a) + parseInt(b);
	}
	function subtract(a, b) {
		return parseInt(a) - parseInt(b);
	}
	function multipy(a, b) {
		return parseInt(a) * parseInt(b);
	}
	function divide(a, b) {
		return parseInt(a) / parseInt(b);
	}
	return {
		add,
		subtract,
		multipy,
		divide,
	};
})();

module.exports = calculator;
