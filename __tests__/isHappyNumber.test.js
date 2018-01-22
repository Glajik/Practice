import isHappyNumber from '../isHappyNumber';

describe('isHappyNumber', () => {
/*
7   => 7^2 = 49,
49  => 4^2 + 9^2 = 16 + 81 = 97,
97  => 9^2 + 7^2 = 81 + 49 = 130,
130 => 1^2 + 3^2 + 0^2 = 10,
10  => 1^2 + 0^2 = 1.
*/

	it('#isHappyNumberTest', () => {
		expect(isHappyNumber(7)).toBe(true);
	});
});