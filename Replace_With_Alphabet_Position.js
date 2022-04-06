//07.04.2022

function alphabetPosition(text) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

  return text
    .replace(/[^a-z]/gi, "")
    .toLowerCase()
    .split("")
    .map((letter) => alphabet.indexOf(letter) + 1)
    .join(" ");
}
