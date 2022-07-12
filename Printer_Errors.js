//13.07.2022

function printerError(s) {
  return (
    s.split("").filter((letter) => !/[a-m]/i.test(letter)).length +
    "/" +
    s.length
  );
}
