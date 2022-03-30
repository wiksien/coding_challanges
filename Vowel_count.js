//31.03.2022

function getCount(str) {
  return str.split("").filter((letter) => /a|e|i|o|u/i.test(letter)).length;
}
