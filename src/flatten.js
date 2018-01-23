// eslint-disable-next-line
import { l, isEmpty, reverse, toString as listToString, isList, head, tail, cons, reduce } from '../sequences/pairs-data';

export default (list) => {
  if (isEmpty(list)) return l();
  const func = (x, acc) => !isList(x) ? cons(x, acc) : reduce(func, acc, x);
  const result = reduce(func, l(), list);
  return reverse(result);
};