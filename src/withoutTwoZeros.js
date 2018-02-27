// BEGIN (write your solution here) (write your solution here)

// Factorial
const F = n => (n <= 1) ? 1 : n * F(n-1);

// Sum
const S = n => (n <= 1) ? n + 1 : n + 1 + S(n-1);

// for debug
const view = (zeros, ones) => {
  return '0'.repeat(zeros).concat('1'.repeat(ones));
};

const withoutTwoZeros = (zeros, ones) => {
  // [0011]
  console.log(`Node: ${view(zeros, ones)}`);

  if (zeros === 1 && ones === 1) return 2; // [01] [10]
  if (ones === 0) return -1; // [00] or [000000000]
  if (zeros === 0) return 1; // [11] or [111111111]

  // 0[011] 
  console.log('/');
  const subtree1 = withoutTwoZeros(zeros - 1, ones);

  // [001]1
  console.log('\\');
  const subtree2 = withoutTwoZeros(zeros, ones - 1);

  console.log(`left: ${subtree1} right: ${subtree2}`);

  if (subtree1 < 0 || subtree2 < 0) {
    console.log('Parent Zero');
    if (subtree1 < 0 && subtree2 < 0) return subtree1 + subtree2 - 1;
    else if (subtree1 < 0) return subtree1 - 1;
    else if (subtree2 < 0) return subtree2 - 1;
  }
  const result = subtree1 + subtree2;

  console.log(`result: ${result}`);

  return 0;
}

const solution = (zeros, ones) => {
  console.log(`--- Input: ${view(zeros, ones)} -----------------------`);
  const n = zeros + ones; // Количество элементов в множестве
  const k = zeros; // Количество элементов в подмножестве (выборка)
  // Число сочетаний
  const result = F(n) / ( F(k) * F(n - k) );
  console.log (`Число сочетаний ${k} от ${n} = ${result}`);

  // Количество перестановок с повторением
  const result1 = F(n) / ( F(zeros) * F(ones) );
  console.log (`Число перестановок с повторением 0:${zeros} и 1:${ones} = ${result1}`);
  // Количество кобинаций с двумя нулями
  const result2 = withoutTwoZeros(zeros, ones);
  console.log(`Число перестановок с двумя нулями ${result2}`);
  return result2 < 0 ? result1 + result2 : result1;
};

export default solution;
// END