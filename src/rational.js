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