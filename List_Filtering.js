//09.08.2022

function filter_list(l) {
  return l.filter((element) => typeof(element) !== "string");
}

/* I could have inverted typeof comparasion to filter === "number".
Cleaner code and will work for other non standard types but let's just live
with this code, since that is how I wrote it on codewars. */