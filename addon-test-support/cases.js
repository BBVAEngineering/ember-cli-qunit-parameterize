// Module from: https://github.com/AStepaniuk/qunit-parameterize
/* eslint-disable max-depth */
import qunit from 'qunit';

function clone(testCase) {
	const result = {};
	let p = null;

	for (p in testCase) {
		if (Object.prototype.hasOwnProperty.call(testCase, p)) {
			result[p] = testCase[p];
		}
	}

	return result;
}

function createTest(methodName, title, callback, parameters) {
	qunit[methodName](title, function(assert) {
		return callback.call(this, parameters, assert);
	});
}

function failTest(title, message) {
	qunit.test(title, (assert) => {
		assert.ok(false, message);
	});
}

function getItem(arr, idx) {
	return arr ? arr[idx] : undefined;
}

function mix(testCase, mixData) {
	let result = null;
	let p = null;

	if (testCase && mixData) {
		result = clone(testCase);

		for (p in mixData) {
			if (Object.prototype.hasOwnProperty.call(mixData, p)) {
				if (p !== 'title') {
					if (!Object.prototype.hasOwnProperty.call(result, p)) {
						result[p] = mixData[p];
					}
				} else {
					result[p] = [result[p], mixData[p]].join('');
				}
			}
		}
	} else if (testCase) {
		result = testCase;
	} else if (mixData) {
		result = mixData;
	} else {
		// return null or undefined whatever testCase is
		result = testCase;
	}

	return result;
}

class CasesTestHelper {
	constructor(testCases) {
		this.currentCases = testCases;
	}

	_forceTestFail(title, message) {
		qunit.test(title, (assert) => {
			assert.ok(false, message);
		});
	}

	_iterateTestCases(methodName, title, callback) {
		if (!this.currentCases || this.currentCases.length === 0) {
			// setup test which will always fail
			return failTest(title, 'No test cases are provided');
		}

		this.currentCases.forEach((parameters) => {
			let testCaseTitle = title;

			if (parameters.title) {
				const separator = testCaseTitle.endsWith(' ') ? '' : ' ';

				testCaseTitle = `${testCaseTitle}${separator}[${parameters.title}]`;
			}

			if (parameters._skip === true) {
				methodName = 'skip';
			}

			createTest(methodName, testCaseTitle, callback, parameters);
		});

		return this;
	}

	sequential(addData) {
		const casesLength = this.currentCases?.length || 0;
		const addDataLength = addData?.length || 0;
		const length = casesLength > addDataLength ? casesLength : addDataLength;
		const newCases = [];
		let i = 0;
		let currentCaseI = null;
		let dataI = null;
		let newCase = null;

		for (i = 0; i < length; i += 1) {
			currentCaseI = getItem(this.currentCases, i);
			dataI = getItem(addData, i);
			newCase = mix(currentCaseI, dataI);

			if (newCase) {
				newCases.push(newCase);
			}
		}

		this.currentCases = newCases;

		return this;
	}

	combinatorial(mixData) {
		const current = (this.currentCases && this.currentCases.length > 0) ? this.currentCases : [null];
		const currentLength = current.length;
		const newCases = [];
		let mixDataLength = 0;
		let i = 0;
		let j = 0;
		let currentCaseI = null;
		let dataJ = null;
		let newCase = null;

		mixData = (mixData && mixData.length > 0) ? mixData : [null];
		mixDataLength = mixData.length;

		for (i = 0; i < currentLength; i += 1) {
			for (j = 0; j < mixDataLength; j += 1) {
				currentCaseI = current[i];
				dataJ = mixData[j];
				newCase = mix(currentCaseI, dataJ);

				if (newCase) {
					newCases.push(newCase);
				}
			}
		}

		this.currentCases = newCases;

		return this;
	}

	test(title, callback) {
		return this._iterateTestCases('test', title, callback);
	}
}

export default function cases(testCases) {
	return new CasesTestHelper(testCases);
}
