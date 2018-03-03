import { length, substr, indexOf } from './strings';

const delimiter = '\n';

export const l = (...items) => items.join(delimiter);

// BEGIN (write your solution here)
export const toString = (list) => {
  const str = list.split(delimiter).join(', ');
  return `(${str})`;
};

const hasDelimiter = list => indexOf(list, delimiter) > -1;
const hasTail = list => hasDelimiter(list) && length(list) > 0;
const hasHead = list => length(list) > 0;

export const head = (list) => {
  if (!hasHead(list)) return '';
  if (!hasTail(list)) return list;
  const len = indexOf(list, delimiter);
  return substr(list, 0, len);
};

export const tail = (list) => {
  if (!hasTail(list)) return '';
  const start = indexOf(list, delimiter) + 1;
  const len = length(list) - start;
  return substr(list, start, len);
};

export const isEmpty = list => !hasHead(list);

export const cons = (item, list) => {
  if (length(item) === 0) return list;
  if (isEmpty(list)) return item;
  return item.concat(delimiter).concat(list);
};

const reverse = (list) => {
  if (isEmpty(list)) return '';
  return cons(head(list), reverse(tail(list)));
};

export const filter = (predicate, list) => {
  const recc = (myList) => {
    if (isEmpty(myList)) return '';
    const item = head(myList);
    const rest = tail(myList);
    if (!predicate(item)) return recc(rest);
    return cons(item, recc(rest));
  };
  return recc(list);
}

export const map = (fn, list) => {
  const recc = (myList) => {
    if (isEmpty(myList)) return '';
    const item = head(myList);
    const rest = tail(myList);
    return cons(fn(item), recc(rest));
  };
  return recc(list);
};

export const reduce = (callbackFn, acc, list) => {
  const iter = (myList, myAcc) => {
    if (isEmpty(myList)) return myAcc;
    const item = head(myList);
    const rest = tail(myList);
    return iter(rest, callbackFn(item, myAcc));
  };
  return iter(list, acc);
};
// END
