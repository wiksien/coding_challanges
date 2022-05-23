//23.05.2022

function XO(str) {
  return (
    str.split("").filter((value) => value.toLowerCase() === "o").length ===
    str.split("").filter((value) => value.toLowerCase() === "x").length
  );
}
