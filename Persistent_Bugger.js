//27.04.2022

function persistence(num, count = 0) {
  return num.toString().length < 2
    ? count
    : persistence(
        num
          .toString()
          .split("")
          .reduce((a, b) => parseInt(a) * parseInt(b)),
        count + 1
      );
}
