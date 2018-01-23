import { l, isEmpty, cons, reduce, has, reverse, toString as listToString } from '../sequences/pairs-data';

export default (list1, list2) => {
  const f = (el, acc) => !has(acc, el) ? cons(el, acc) : acc;
  const newlist = reduce(f, l(), list1);
  const result = reduce(f, newlist, list2);
  return reverse(result);
};