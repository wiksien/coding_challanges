//28.04.2022

function spinWords(string) {
  return string
    .split(" ")
    .map((word) => (word.length > 4 ? word.split("").reverse().join("") : word))
    .join(" ");
}
