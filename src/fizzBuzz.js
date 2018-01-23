/* eslint no-console: 0 */
const fizzBuzz = (begin, end) => {
  if (begin > end) return;
 
  let result = begin;

  if (begin % 3 === 0 && begin % 5 === 0) {
    result = 'FizzBuzz';
  } else if (begin % 3 === 0) {
    result = 'Fizz';
  } else if (begin % 5 === 0) {
    result = 'Buzz';
  };
	
	console.log(result);

  fizzBuzz(begin + 1, end);

};

export default fizzBuzz;
