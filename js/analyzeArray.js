function analyzeArray(array) {
	return {
		average: array.reduce((total, num) => total + num, 0) / array.length,
		min: array.reduce((prev, current) => (prev < current ? prev : current)),
		max: array.reduce((prev, current) => (prev > current ? prev : current)),
		length: array.length,
	};
}

module.exports = analyzeArray;
