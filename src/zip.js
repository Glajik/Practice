import { l, isEmpty, head, tail, cons, toString as listToString } from '../sequences/pairs-data'; // eslint-disable-line
import { reverse } from '../sequences/lists';

const zip = (list1, list2) => {
  const iter = (mylist1, mylist2, result) => {
    if (isEmpty(mylist1) || isEmpty(mylist2)) return result;

    const item1 = head(mylist1);
    const item2 = head(mylist2);
    const rest1 = tail(mylist1);
    const rest2 = tail(mylist2);

    const newresult = cons(l(item1, item2), result);

    return iter(rest1, rest2, newresult);
  };

  return reverse(iter(list1, list2, l()));
};

export default zip;
