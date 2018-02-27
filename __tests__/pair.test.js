import { car, cdr, cons } from '../src/pair';

describe('pair', () => {
  it('set 1', () => {
    const pair1 = cons(0, 0);
    expect(car(pair1)).toBe(0);
    expect(cdr(pair1)).toBe(0);

    const pair2 = cons(1, 1);
    expect(car(pair2)).toBe(1);
    expect(cdr(pair2)).toBe(1);

    const pair3 = cons(3, 5);
    expect(car(pair3)).toBe(3);
    expect(cdr(pair3)).toBe(5);

    const pair4 = cons(7, 7);
    expect(car(pair4)).toBe(7);
    expect(cdr(pair4)).toBe(7);

    const pair5 = cons(10, 15);
    expect(car(pair5)).toBe(10);
    expect(cdr(pair5)).toBe(15);
  });

});
