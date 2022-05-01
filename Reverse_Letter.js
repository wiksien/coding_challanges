//01.05.2022

function reverseLetter(str) {
  return str
    .split("")
    .filter((letter) => /[a-z]/i.test(letter))
    .reverse()
    .join("");
}
