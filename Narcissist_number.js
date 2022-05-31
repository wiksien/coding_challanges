//31.05.2022

function isNarcissistic(n) {
  return (
    n ===
    n
      .toString()
      .split("")
      .map((number) => number ** n.toString().length)
      .reduce((a, b) => a + b)
  );
}
