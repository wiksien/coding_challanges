//13.05.2022

function findShort(s) {
  return Math.min(...s.split(" ").map((word) => word.length));
}
