//10.04.2022

String.prototype.isUpperCase = function () {
  return this.valueOf() === this.valueOf().toUpperCase();
};

//I could have omitted .valueOf and it would work. Too bad!
