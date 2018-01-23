// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '../sequences/pairs';

export const make = (num, den) => cons (num, den);

export const numer = ratio => car(ratio);

export const denom = ratio => cdr(ratio);

export const toString = ratio => `${(numer(ratio))} / ${denom(ratio)}`;

export const isEqual = (rat1, rat2) => {
  const nrat1 = normal(rat1);
  const nrat2 = normal(rat2);
  
  const a = numer(nrat1);
  const b = denom(nrat1);
  const c = numer(nrat2);
  const d = denom(nrat2);

  const result = a * d === c * b;

  console.log(`isEqual: (${toString(rat1)} === ${toString(rat2)}) => (${toString(nrat1)} === ${toString(nrat2)}) is ${result}`);
  
  return result;
  }


export const add = (rat1, rat2) => {
  const nrat1 = normal(rat1);
  const nrat2 = normal(rat2);
    
  const a = numer(nrat1);
  const b = denom(nrat1);
  const c = numer(nrat2);
  const d = denom(nrat2);
  const num = (a * d + b * c);
  const den = b * d;
  const result = make(num, den);

  console.log(`Add: (${toString(rat1)} + ${toString(rat2)}) => (${toString(nrat1)} + ${toString(nrat2)}) = ${toString(result)}`);

  return result;
  }


export const sub = (rat1, rat2) => {
  const nrat1 = normal(rat1);
  const nrat2 = normal(rat2);
    
  const a = numer(nrat1);
  const b = denom(nrat1);
  const c = numer(nrat2);
  const d = denom(nrat2);
  const num = (a * d - b * c);
  const den = b * d;
  const result = make(num, den);

  console.log(`Sub: (${toString(rat1)} - ${toString(rat2)}) => (${toString(nrat1)} - ${toString(nrat2)}) = ${toString(result)}`);

  return result;

}

export const mul = (rat1, rat2) => {
  const nrat1 = normal(rat1);
  const nrat2 = normal(rat2);
    
  const a = numer(nrat1);
  const b = denom(nrat1);
  const c = numer(nrat2);
  const d = denom(nrat2);
  const num = a * c;
  const den = b * d;
  const result = make(num, den);

  console.log(`Sub: (${toString(rat1)} * ${toString(rat2)}) => (${toString(nrat1)} * ${toString(nrat2)}) = ${toString(result)}`);

  return result;
}

export const div = (rat1, rat2) => {
  const nrat1 = normal(rat1);
  const nrat2 = normal(rat2);
    
  const a = numer(nrat1);
  const b = denom(nrat1);
  const c = numer(nrat2);
  const d = denom(nrat2);
  const num = a * d;
  const den = b * c;
  const result = make(num, den);

  console.log(`Div: (${toString(rat1)} : ${toString(rat2)}) => (${toString(nrat1)} : ${toString(nrat2)}) = ${toString(result)}`);

  return result;
 

}

const sign = rat => {
  if (denom(rat) < 0) 
    return make (-1 * numer(rat), -1 * denom(rat));

  return rat;
}

const normal = rat => {
  const ratio = sign(rat);
  
  console.log(`Sign: ${toString (rat)} => ${toString(ratio)}`);

  if (numer(ratio) === 0) return make (0, 0);

  if (numer(ratio) > 0 && numer(ratio) === denom(ratio)) return make (1, 1);

  if (numer(ratio) < 0 && numer(ratio) * -1 === denom(ratio)) return make (-1, 1);
  
  if (numer(ratio) % denom(ratio) === 0) return make (numer(ratio) / denom(ratio), 1);

  if (denom(ratio) % numer(ratio) === 0) 
      return (numer(ratio) > 0 ) ? make (1, denom(ratio) / numer(ratio)) : make (-1, denom(ratio) / (numer(ratio) * -1));
  
  return ratio;
}