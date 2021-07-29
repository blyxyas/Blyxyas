// Import readline and fs modules.
fs = require("fs");
rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Import the save file, if it exists, else, create a file named "savestate" and start the game.
savestate = require("./savestate.json");

// **********************
// TODO: SAVE FUNCTION ↓↓
// **********************

function save() {
  if (fs.existsSync("./savestate.json")) {
    console.log("savestate file detected in the current directory");
    // TODO: SAVE FUNCTION
  } else {
    console.log(
      "savestate file not detected in the current directory, creating a new one"
    );
    fs.writeFileSync("./savestate.json", JSON.stringify(savestate));
  }
}
// *******************************************
// ^ MAIN GAME
// *******************************************

// ~ Check the argument

rl.on("line", (line) => {
  if (commands.indexOf(line) > -1) {
    if (line === "save") {
      save();
    }
  } else {
    console.log(
      "Invalid command. All your progress were saved to 'savestate.json' don't worry"
    );
    save();
    process.exit();
  }
});
