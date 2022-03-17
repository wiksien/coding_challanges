//17.03.2022

function reverse(str) {
  let words = str.split(" ");

  for (let i = 1; i < words.length; i = i + 2) {
    words[i] = words[i].split("").reverse().join("");
  }

  return words.join("") == "" ? "" : words.join(" ");
}

/*
Lesson learned from seeing solutions:

trim() exits and is used for triming spaces before and after the text of a string.
*/
