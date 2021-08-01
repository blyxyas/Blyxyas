fs = require("fs");

function save() {
  fs.writeFileSync("./tosave.json", JSON.stringify(content));
}

function load() {
  content = fs.readFileSync("./tosave.json");
}

load();
content.money += 23;
console.log(content.money.toString());
content.inventory += 547;
save();
