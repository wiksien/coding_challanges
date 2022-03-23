//23.03.2022

let number = function (array) {
  let result = [];

  if (array[0] === undefined) {
    return result;
  } else {
    for (let i = 0; i < array.length; i++) {
      result.push(i + 1 + ": " + array[i]);
    }

    return result;
  }
};

//I learned that I can add additional argument to .map() method that acts as a number adding plus one every time the loop passes.
