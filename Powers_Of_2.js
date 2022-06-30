//30.06.2022

function powersOfTwo(n) {
  return [...Array(n + 1).keys()].map((value) => 2 ** value);
}
