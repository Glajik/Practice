import { l, isEmpty, cons, toString as listToString } from '../sequences/pairs-data';
import { reduce, has, reverse } from '../sequences/lists';

export default (list1, list2) => {
  const f = (el, acc) => !has(acc, el) ? cons(el, acc) : acc;
  const newlist = reduce(f, l(), list1);
  const result = reduce(f, newlist, list2);
  return reverse(result);
};