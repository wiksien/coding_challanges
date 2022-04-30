//30.04.2022

const sequenceSum = (begin, end, step) => {
  let arrayOfNumbers = [];

  for (begin; begin <= end; begin = begin + step) {
    arrayOfNumbers.push(begin);
  }

  return arrayOfNumbers[0] === undefined
    ? 0
    : arrayOfNumbers.reduce((a, b) => a + b);
};
