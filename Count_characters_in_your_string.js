//12.03.2022

function count(string) {
  let result = {};
  //This chunk of code only works with bracket notation of objects,
  //because otherwise it takes variable name and not the variable as key.
  string.split("").forEach(function (letter) {
    if (result.hasOwnProperty(letter)) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  });
  return result;
}
