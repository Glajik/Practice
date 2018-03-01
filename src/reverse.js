import { length, substr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here) (write your solution here)
const reverse = (str) => {
  if (length(str) < 2) {
    return str;
  } else {
    const first = substr(str, 0, 1);
    const rest = substr(str, 1, length(str) - 1);
    return reverse(rest) + first;
  };
};
export default reverse;
// END