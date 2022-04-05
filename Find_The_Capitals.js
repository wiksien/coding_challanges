//05.04.2022

let capitals = function (word) {
  let result = [];

  word.split("").forEach(function (number, index) {
    if (number === number.toUpperCase()) {
      result.push(index);
    }
  });

  return result;
};
