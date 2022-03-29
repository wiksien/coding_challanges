//29.03.2022

function isTriangle(a, b, c) {
  return (
    [a, b, c]
      .sort((a, b) => a - b)
      .splice(0, 2)
      .reduce((a, b) => a + b) > [a, b, c].sort((a, b) => a - b)[2]
  );
}

//Overcomplicated a lot out of this one. Could have just gone with a simple 3 and statments, welp. Too bad!
