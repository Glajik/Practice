import { length } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const abs = num => num < 0 ? num * (-1) : num; // eslint-disable-line

const copySign = (src, dst) => src < 0 ? dst * (-1) : dst; // eslint-disable-line

const digits = num => 10 ** length(num.toString());

const reverseInt = (num) => { // eslint-disable-line
  if (abs(num) < 10) return num;
  const first = abs(num) % 10;
  const rest = (abs(num) / 10) - (first / 10);
  const result = (first * digits(rest)) + reverseInt(rest);
  return copySign(num, result);
};

export default reverseInt;
// END
