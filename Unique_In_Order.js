//25.05.2022

let uniqueInOrder = function (iterable) {
  if (typeof iterable === "object") {
    return iterable.filter((value, index) => value !== iterable[index + 1]);
  } else {
    return iterable
      .split("")
      .filter((value, index) => value !== iterable[index + 1]);
  }
};
