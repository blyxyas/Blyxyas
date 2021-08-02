stages = require("./stages.json");

console.log("Length\t\tName\n--------\t--------");
for (each in stages) {
  console.log(
    `${stages[each].content.toString().length}              ${
      stages[each].name
    }`
  );
}
