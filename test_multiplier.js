const multiply = require('./multiplier.js');

class TestSuite {
	runTests() {
		this.testMulPosNumbers();
		this.testMulNegNumbers();
		this.testMulPosAndNegNumbers();
		// do NaN cases go in here
		// cases where 2+ nums
	}
	assertEquals(a, b) {
		return a === b;
	}
	testMulPosNumbers() {
		const result = this.assertEquals(multiply(2, 3), 6);
		console.log(result, 'testMulPosNumbers');
	}
	testMulNegNumbers() {
		const result = this.assertEquals(multiply(-2, -3), 6);
		console.log(result, 'testMulNegNumbers');
	}
	testMulPosAndNegNumbers() {
		const result = this.assertEquals(multiply(2, -3), -6);
		console.log(result, 'testMulPosAndNegNumbers');
	}
}

const testSuite = new TestSuite(); //why
testSuite.runTests();