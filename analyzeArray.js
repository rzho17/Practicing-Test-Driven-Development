const findAvg = (arr) => {
  let total = 0;

  arr.forEach((element) => {
    total += element;
  });

  return total / arr.length;
};
const findMin = (arr) => {
  return arr.reduce((a, b) => Math.min(a, b));
};
const findMax = (arr) => {
  return arr.reduce((a, b) => Math.max(a, b));
};
const findLength = (arr) => {
  return arr.length;
};

const analyze = (arr) => {
  const newObj = {
    average: findAvg(arr),
    min: findMin(arr),
    max: findMax(arr),
    length: findLength(arr),
  };

  return newObj;
};

module.exports = analyze;
