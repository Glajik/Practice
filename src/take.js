// eslint-disable-next-line
import { l, isEmpty, head, tail, cons, toString as listToString } from '../sequences/pairs-data';

const take = (count, list) => {
  if (isEmpty(list) || count < 1) {
    return l();
  } else {
    return cons(head(list), take(count - 1, tail(list)));
  };
};

export default take;