//22.04.2022

function dontGiveMeFive(start, end) {
  let numberArray = [];

  for (start; start <= end; start++) {
    numberArray.push(start);
  }

  return numberArray.filter((number) => !number.toString().includes(5)).length;
}
