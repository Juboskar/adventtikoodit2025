const fs = require("fs");

var input = fs.readFileSync("aoc1/input.txt", "utf8").split("\n");

var sum = 50;
var counter = 0;
input.forEach((i) => {
  var value = Number(i.substring(1));

  value = i[0] === "L" ? -value : value;

  if (Math.max(sum, sum + value) > 0 && Math.min(sum, sum + value) < 0) {
    counter++;
  }

  sum += value;
  counter += Math.floor(Math.abs(sum) / 100);
  if (sum === 0) {
    counter++;
  }
  sum = sum % 100;
});

console.log(counter);
