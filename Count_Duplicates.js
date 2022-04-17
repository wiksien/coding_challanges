//17.04.2022

function duplicateCount(text) {
  let lettersList = {};

  text
    .toLowerCase()
    .split("")
    .forEach(function (letter) {
      if (lettersList.hasOwnProperty(letter)) {
        lettersList[letter]++;
      } else {
        lettersList[letter] = 1;
      }
    });

  return Object.values(lettersList).filter(
    (amountOfLetters) => amountOfLetters > 1
  ).length;
}
