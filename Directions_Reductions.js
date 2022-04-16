//16.04.2022

function dirReduc(arr) {
  const isLowerCase = arr[0][1] !== arr[0][1].toUpperCase();

  arr = arr.map((direction) => direction.toUpperCase());

  function reduceOneDirection(arr, index) {
    let isChanged = false;

    switch (arr[index]) {
      case "NORTH":
        if (arr[index + 1] === "SOUTH") {
          arr.splice(index, 2);
          isChanged = true;
        }
        break;
      case "SOUTH":
        if (arr[index + 1] === "NORTH") {
          arr.splice(index, 2);
          isChanged = true;
        }
        break;
      case "EAST":
        if (arr[index + 1] === "WEST") {
          arr.splice(index, 2);
          isChanged = true;
        }
        break;
      case "WEST":
        if (arr[index + 1] === "EAST") {
          arr.splice(index, 2);
          isChanged = true;
        }
        break;
    }

    if (isChanged === true) {
      return reduceOneDirection(arr, 0);

      isChanged = false;
    }

    if (arr[index + 1] === undefined) {
      return arr;
    }

    return reduceOneDirection(arr, index + 1);
  }

  if (isLowerCase === true) {
    return reduceOneDirection(arr, 0).map(
      (direction) => direction[0] + direction.substr(1).toLowerCase()
    );
  }

  return reduceOneDirection(arr, 0);
}

//This solution i super long and kind of too complcated, but I am proud of my clunky code :)
