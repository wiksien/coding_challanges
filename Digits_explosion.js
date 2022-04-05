//05.04.2022

function explode(s) {
  let result = [];

  s.split("").forEach(function (number) {
    for (let i = number; i > 0; i--) {
      result.push(number);
    }
  });

  return result.join("");
}
