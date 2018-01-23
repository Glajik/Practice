const difference = (set1, set2) => {
const newSet = new Set();
set1.forEach(
  value => {
    if (set1.has(value) && !set2.has(value)) {
      newSet.add(value);
    }
  });
return newSet;
};

export default difference;