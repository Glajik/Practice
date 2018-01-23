export default (n) => {
  const findPower = (power) => {
    if (3 ** power > n) {
      return false;
    } else if (3 ** power < n) {
      return findPower(power + 1);
    }
    return true;
  };
  return findPower(0);
};