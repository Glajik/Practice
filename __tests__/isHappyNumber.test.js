import isHappyNumber from '../src/isHappyNumber';

test('isHappyNumber', () => {
  expect(isHappyNumber(1)).toBe(true);
  expect(isHappyNumber(7)).toBe(true);
  expect(isHappyNumber(13)).toBe(true);
  expect(isHappyNumber(0)).toBe(false);
  expect(isHappyNumber(2)).toBe(false);
  expect(isHappyNumber(90)).toBe(false);
});