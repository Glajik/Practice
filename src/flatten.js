// eslint-disable-next-line
import { l, isEmpty, isList, toString as listToString, head, tail, cons } from '../sequences/pairs-data';
import { reverse, reduce } from '../sequences/lists';

export default (list) => {
  if (isEmpty(list)) return l();
  const func = (x, acc) => !isList(x) ? cons(x, acc) : reduce(func, acc, x);
  const result = reduce(func, l(), list);
  return reverse(result);
};