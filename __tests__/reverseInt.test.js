import reverseInt from '../src/reverseInt';

test('reverseInt', () => {
  expect(reverseInt(12)).toBe(21);
  expect(reverseInt(-122)).toBe(-221);
  expect(reverseInt(-1234)).toBe(-4321);
});