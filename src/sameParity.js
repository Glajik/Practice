// eslint-disable-next-line
import { l, isEmpty, head, tail, toString as listToString } from '../sequences/pairs-data';
import { filter } from '../sequences/lists';

const sameParity = (list) => {
  if (isEmpty(list)) return l();
  
  const first = head(list);

  const parity = s => Math.abs(Number(s) % 2) === 0 ? true : false;
  
  return filter(el => parity(el) === parity(first), list);
};

export default sameParity;