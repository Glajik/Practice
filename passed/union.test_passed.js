import { l, toString as listToString } from '../sequences/pairs-data';
import union from '../src/union';

describe('Union', () => {
  it('set 1', () => {
    const list1 = l();
    const list2 = l();

    const result = union(list1, list2);
    expect(listToString(result)).toBe('()');
  });

  it('set 2', () => {
    const list1 = l(1, 5, 3, 5, 8, 9);
    const list2 = l(2, 3, 2, 1, 7);

    const result = union(list1, list2);
    expect(listToString(result)).toBe(listToString(l(1, 5, 3, 8, 9, 2, 7)));
  });

  it('set 3', () => {
    const list1 = l(2, 3, 2, 1, 7);
    const list2 = l(1, 5, 3, 5, 8, 9);

    const result = union(list1, list2);
    expect(listToString(result)).toBe(listToString(l(2, 3, 1, 7, 5, 8, 9)));
  });
});
