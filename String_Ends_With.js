//13.05.2022

function solution(str, ending) {
  return ending.length === 0
    ? true
    : str.split("").slice(-ending.length).join("") === ending;
}

//endsWith() exists :P
