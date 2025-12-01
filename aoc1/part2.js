var input = require("fs").readFileSync("aoc1/input.txt", "utf8").split("\n");

var pointer = 50;
var counter = 0;
input.forEach((i) => {
  var value = Number(i.substring(1));

  var changed = pointer + (i[0] === "L" ? -value : value);
  counter +=
    Math.floor(Math.abs(changed) / 100) +
    (changed === 0) +
    (Math.max(pointer, changed) > 0 && Math.min(pointer, changed) < 0);
  pointer = changed % 100;
});

console.log(counter);
