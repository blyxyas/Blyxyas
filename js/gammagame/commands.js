// * Save command
savestate = require("./savestate.json");
data = require("./data.json");

function save() {
  if (fs.existsSync("./savestate.json")) {
    console.log("savestate file detected in the current directory");
  } else {
    console.log(
      "savestate file not detected in the current directory, creating a new one"
    );
    fs.writeFileSync("./savestate.json", JSON.stringify(savestate));
  }
}

// * Commands

rl.on("line", (line) => {
  if (line === "save") {
    save();
  }
  if (line === "inv") {
    console.log(displayInventory());
  }
  if (line === "exit" || line === "quit") {
    console.log("Goodbye! (All your progress were saved to 'savestate.json')");
    process.exit();
  }
  if (line === "help") {
    console.log(data.help);
  }
});

inventory = data.inventory;
function displayInventory() {
  if (inventory != []) {
    console.log("Inventory is empty!");
  } else {
    console.log("Inventory:" + inventory.toString().replace(",", "\n"));
  }
}
