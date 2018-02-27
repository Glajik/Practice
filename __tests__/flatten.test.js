import { l, toString as listToString } from '../sequences/pairs-data';
import flatten from '../src/flatten';

describe('Flatten', () => {
  it('set 1', () => {
    const list = l();

    expect(listToString(flatten(list))).toBe('()');
  });

  it('set 2', () => {
    const list = l(1, 2, l(3, 5), l(l(4, 3), 2));

    expect(listToString(flatten(list))).toBe('(1, 2, 3, 5, 4, 3, 2)');
  });

  it('set 3', () => {
    const list = l(l(1, l(5), l(), l(l(-3, 'hi'))), 'string', 10, l(l(l(5))));

    expect(listToString(flatten(list))).toBe('(1, 5, -3, hi, string, 10, 5)');
  });
});
