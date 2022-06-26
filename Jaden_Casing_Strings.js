//27.06.2022

String.prototype.toJadenCase = function () {
  return this.toString()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
