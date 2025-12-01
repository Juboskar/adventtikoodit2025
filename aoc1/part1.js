const fs = require("fs");

var input = fs.readFileSync("aoc1/input.txt", "utf8").split("\n");

var sum = 50;
var counter = 0;
input.forEach((i) => {
  var value = Number(i.substring(1));
  i[0] === "L" ? (sum -= value) : (sum += value);
  if (sum % 100 === 0) {
    counter++;
  }
});

console.log(counter);
