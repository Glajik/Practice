// BEGIN (write your solution here) (write your solution here)

// Factorial
const F = n => (n <= 1) ? 1 : n * F(n-1);

const countTwoZeros = (zeros, ones) => {
  if (zeros === 1 && ones === 1) return 0; // [01] [10]
  if (ones === 0) return 1; // [00] or [000000000]
  if (zeros === 0) return 0; // [11] or [111111111]
  const subtree1 = countTwoZeros(zeros - 1, ones);
  const subtree2 = countTwoZeros(zeros, ones - 1);
  if (subtree1 > 0 || subtree2 > 0) return subtree1 + subtree2 + 1;
  return 0;
}

const solution = (zeros, ones) => {
  console.log(`--- Inpu - zeros:${zeros} ones:${ones} -----------------------`);

  // Количество перестановок с повторением
  const count = F(zeros + ones) / ( F(zeros) * F(ones) );
  console.log (`Число перестановок = ${count}`);

  // Количество кобинаций с двумя нулями
  const result = count - countTwoZeros(zeros, ones);
  console.log(`Число перестановок без двух нулей  ${result}`);
  return result;
};

export default solution;
// END