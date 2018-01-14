import testFunction from '../sumSquareDifference';

describe('Data', () => {
	it('#sumSquareDifference', () => {
		expect(testFunction(1)).toBe(0);
		expect(testFunction(2)).toBe(4);
		expect(testFunction(3)).toBe(22);
		expect(testFunction(10)).toBe(2640);
	});
});