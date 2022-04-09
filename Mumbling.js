//09.04.2022

function accum(s) {
  let result = s
    .split("")
    .map(
      (letter, index) =>
        letter.toUpperCase() + letter.toLowerCase().repeat(index) + "-"
    )
    .join("");

  return result.slice(0, result.length - 1);
}
