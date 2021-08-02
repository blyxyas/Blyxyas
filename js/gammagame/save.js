fs = require("fs");

let savestate;

function save() {
  fs.writeFileSync("./savestate.json", savestate);
  console.log("0 Errors while saving");
}

function load() {
  savestate = fs.readFileSync("./savestate.json");
}

load();
save();
console.log(JSON.parse(savestate));
