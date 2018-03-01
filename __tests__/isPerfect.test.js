import isPerfect from '../src/isPerfect';

test('isPerfect', () => {
  expect(isPerfect(0)).toBe(false);
  expect(isPerfect(10)).toBe(false);
  expect(isPerfect(44)).toBe(false);
  expect(isPerfect(6)).toBe(true);
  expect(isPerfect(28)).toBe(true);
  expect(isPerfect(496)).toBe(true);
  expect(isPerfect(8128)).toBe(true);
});
