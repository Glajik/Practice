import { l, toString as listToString } from '../sequences/pairs-data';
import zip from '../src/zip';

describe('Zip', () => {
  it('set 1', () => {
    const list1 = l();
    const list2 = l();

    const result = zip(list1, list2);
    expect(listToString(result)).toBe('()');
  });

  it('set 2', () => {
    const list1 = l(1, 5, 3, 8, 9);
    const list2 = l(2, 3, 2, 1);

    const result = zip(list1, list2);
    expect(listToString(result)).toBe('((1, 2), (5, 3), (3, 2), (8, 1))');
  });

  it('set 3', () => {
    const list1 = l(2, 3, 2, 1);
    const list2 = l(1, 5, 3, 8, 9);

    const result = zip(list1, list2);
    expect(listToString(result)).toBe('((2, 1), (3, 5), (2, 3), (1, 8))');
  });

  it('set 4', () => {
    const list1 = l(8, 3, 5, 1);
    const list2 = l(1, 2, 3, 2);

    const result = zip(list1, list2);
    expect(listToString(result)).toBe('((8, 1), (3, 2), (5, 3), (1, 2))');
  });
});