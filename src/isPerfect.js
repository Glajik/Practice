const isPerfect = (num) => {
  const iter = (acc, divider) => {
    if (acc >= num) return acc;
    if (num % divider === 0) {
      return iter(acc + divider, divider + 1);
    }
    return iter(acc, divider + 1);
  };
  if (num < 1) return false;
  return iter(0, 1) === num;
};

export default isPerfect;
