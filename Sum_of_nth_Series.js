//29.07.2022

function SeriesSum(n) {
  let result = [];
  result.push(1);

  for (let i = 1; i < n; i++) {
    result.push(1 / (1 + i * 3));
  }

  if (n === 0) {
    return "0.00";
  }

  return result.length !== 1
    ? result
        .reduce((firstValue, secondValue) => firstValue + secondValue)
        .toFixed(2)
    : result[0].toFixed(2);
}