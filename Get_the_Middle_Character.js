//22.03.2022

function getMiddle(s) {
  let wordLength = s.length;

  if (wordLength % 2 == 0) {
    return s.slice(wordLength / 2 - 1, wordLength / 2 + 1);
  } else {
    return s.slice((wordLength + 1) / 2 - 1, (wordLength + 1) / 2);
  }
}
