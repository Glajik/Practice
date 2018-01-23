import dnaToRna from '../src/dnaToRna';

test('dnaToRna', () => {
  expect(dnaToRna('ACGTGGTCTTAA')).toBe('UGCACCAGAAUU');
  expect(dnaToRna('CCGTA')).toBe('GGCAU');
  expect(dnaToRna('')).toBe('');
  expect(dnaToRna('ACNTG')).toBeNull();
});
