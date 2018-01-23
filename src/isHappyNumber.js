const sumOfSquareDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < numAsStr.length; i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

const isHappyNumber = num => {
  
  const iter = (num, count) => {
    if (count === 0) return false;
    
    const result = sumOfSquareDigits(num);
    if (result === 1) return true;  
    
    return iter (result, count-1);
    
  }

  return iter(num, 10);
};

export default isHappyNumber;