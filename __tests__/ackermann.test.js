/* global define, it, describe */

// import assert from 'assert';
import ackermann from '../src/ackermann';

// describe('ackermann', () => {
//   it('should work', () => {
//     assert.equal(ackermann(0, 0), 1);
//     assert.equal(ackermann(1, 1), 3);
//     assert.equal(ackermann(1, 2), 4);
//     assert.equal(ackermann(2, 1), 5);
//     assert.equal(ackermann(2, 3), 9);
//   });
//   it('bad value', () => {
//     assert.equal(ackermann(-1, 1), undefined);
//     assert.equal(ackermann(1, -1), undefined);
//   });
// });

describe('ackermann', () => {
  it('should work', () => {
    expect(ackermann(0, 0)).toBe(1);
    expect(ackermann(1, 1)).toBe(3);
    expect(ackermann(1, 2)).toBe(4);
    expect(ackermann(2, 1)).toBe(5);
    expect(ackermann(2, 3)).toBe(9);
  });

  it('bad value', () => {
    expect(ackermann(-1, 1)).toBeUndefined();
    expect(ackermann(1, -1)).toBeUndefined();
  });
});