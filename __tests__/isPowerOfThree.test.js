import isPowerOfThree from '../src/isPowerOfThree';

describe('isPowerOfThree', () => {
  it('should work', () => {
    expect(isPowerOfThree(1)).toBe(true);
    expect(isPowerOfThree(2)).toBe(false);
    expect(isPowerOfThree(3)).toBe(true);
    expect(isPowerOfThree(9)).toBe(true);
    expect(isPowerOfThree(12)).toBe(false);
    expect(isPowerOfThree(27)).toBe(true);
    expect(isPowerOfThree(28)).toBe(false);
    expect(isPowerOfThree(90)).toBe(false);
  });
});
