// BEGIN (write your solution here)
const iter = (num, d, count) => {
  if (num < d) return count;
  if (num % d === 0) return iter(num / d, d, count + 1);
  return count;
};

export const cons = (a, b) => (2 ** a) * (3 ** b);
export const car = pair => iter(pair, 2, 0);
export const cdr = pair => iter(pair, 3, 0);
// END
