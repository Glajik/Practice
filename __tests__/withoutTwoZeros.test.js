import solution from '../withoutTwoZeros';

describe('Data', () => {
	it('#withoutTwoZeros', () => {

		// usage: solution(zeros, ones);
		// return amount of combination without two zeros nearby
		expect(solution(1, 1)).toBe(2);
		expect(solution(2, 2)).toBe(3);
		expect(solution(3, 1)).toBe(0);
		expect(solution(2, 1)).toBe(1);

	});
});