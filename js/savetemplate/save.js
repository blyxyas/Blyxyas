fs = require("fs");

function save() {
  content.money += 3412;
  fs.writeFileSync("./tosave.json", content);
}

function load() {
  content = fs.readFileSync("./tosave.json");
}

load();
save();

