import { Zero, Succ } from '../src/numerals';

test('numerals', () => {
  const two = Succ(Succ(Zero));
  expect(two(x => x + 1)(0)).toBe(2);
  
  const four = Succ(Succ(two));
  expect(four(x => x + 1)(0)).toBe(4);
});