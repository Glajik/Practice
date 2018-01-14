// BEGIN (write your solution here) (write your solution here)

// Pair section
const cons = (a, b) => msg => msg ? a : b;

const car = pair => pair(true);

const cdr = pair => pair(false);

// List section

const make = () => cons(null, null);

const head = list => car(list);

const tail = list => cdr(list);

const isEmpty = list => (head(list) === null && tail(list) === null) ? true : false;

const add = (item, list) => isEmpty(list) ? cons(item, null) : cons (item, list);

const map = (func, list) => {
  if (isEmpty(list)) return make();

  const newItem = func(head(list));

  if (tail(list) === null) return add(newItem, null) ;
  
  return add(newItem, map(func, tail(list)));
};

const listToString = list => {
  if (isEmpty(list)) return '';
  
  if (tail(list) === null) return head(list);

  return `${head(list)}, ${listToString(tail(list))}`;
};

// Создает список с последовательными номерами начиная со start
const numerate = (start, count) => {
  const iter = (acc, list) => {
    if (acc > count) return list;
    return iter(acc+1, add(start+acc-1, list));
  };
  return iter(1, make());
};

// Меняет местами позиции нулей и единиц
const swap = (item_zero, item_one, pair) => {
  const zeros_list = map(x => {x === item_zero ? item_one : x}, car(pair));
  const ones_list = map(x => {x === item_one ? item_zero : x}, cdr(pair));
  return cons(zeros_list, ones_list);
};

// Factorial
const F = n => (n <= 1) ? 1 : n * F(n-1);

// Sum
const S = n => (n <= 1) ? n + 1 : n + 1 + S(n-1);

const solution = (zeros, ones) => {

  const n = zeros + ones; // Количество элементов в множестве
  const k = zeros; // Количество элементов в подмножестве (выборка)
  // Число сочетаний
  const result = F(n) / ( F(k) * F(n - k) );
  console.log (`Число сочетаний ${k} от ${n} = ${result}`);

  // Количество перестановок с повторением
  const result1 = F(n) / ( F(zeros) * F(ones) );

  console.log (`Число перестановок с повторением 0:${zeros} и 1:${ones} = ${result1}`);
  
  let result2;
  if (zeros < 2) result2 = result1;
  else if (ones < 2 && zeros > 1) result2 = 0;
  else if (ones+zeros < 3) result2 = ones+zeros;
  else if (zeros === 2) result2 = result1 - (ones + 1);
  else if (zeros < ones) result2 = S(ones);
  else if (zeros > ones) result2 = result1 - S(zeros);
  else if (zeros === ones) result2 = result1 / 2;

  console.log (`Число перестановок без двух нулей: ${result2}`);

// Вариант с созданием списков и комбинированием
//  const zeros_list = numerate(1, zeros);

//  const ones_list = numerate(zeros+1, ones);

//  console.log (`Zeros: ${listToString(zeros_list)}`);
//  console.log (`Ones: ${listToString(ones_list)}`);

 // const resultpair = swap(1, 4, cons(zeros_list, ones_list));

//  console.log (`swaped Zeros: ${listToString(car(resultpair))}`);
//  console.log (`swaped Ones: ${listToString(cdr(resultpair))}`);

  return result2;

};



export default solution;
// END