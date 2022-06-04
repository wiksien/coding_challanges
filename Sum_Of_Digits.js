//04.05.2022

function digital_root(n) {
  if (n.toString().length === 1) {
    return n;
  } else {
    return digital_root(
      n
        .toString()
        .split("")
        .reduce((a, b) => Number(a) + Number(b))
    );
  }
}
