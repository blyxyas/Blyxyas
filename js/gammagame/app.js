//****************************************************************************************************************************************
/*
^
^ Copyright 2021 Blyxyas, github.com/Blyxyas. If you want to use this code, you must leave this (current) line intact and legible.
^ I don't think you're gonna use this code, but I'll leave it in here anyway.
^ Btw this is in work in progress, so don't expect it to work.
^
*/
//****************************************************************************************************************************************

// * Auxiliar variables and things:
// ! IMPORTANT:  Recommended: To visualize better this code use the "Colorful Comments" extension in VS Code (And Horizon theme, but that's a little to much personal preference, just recommended)

// Import readline and fs modules.
fs = require("fs");
rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create all the variables and objects that will be used in the game:

let money;
let inventory = ["Empty"];
// ^ display inventory function
function displayInventory() {
  console.log("Inventory:" + inventory.toString().replace(",", "\n"));
}

// Import the save file, if it exists, else, create a file named "savestate" and start the game.
savestate = require("./savestate.json");
// And import another data module to handle the game's auxiliar variables, commands, etc....
data = require("./data.json");

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

// **********************
// ~ Commands:
// **********************
// ~   help - Shows the list of commands.
// ~   save - Saves the game state.
// ~   exit / quit - quits the game (and saves the game state.)
// ~   inv - Shows the inventory.
// ~   stats - Shows the player's stats.
// ~   cat - Shows this cool cat ascii art, you know, for fun.

// TODO: more commands, maybe?
// **********************

rl.on("line", (line) => {
  if (data.commands.indexOf(line) > -1) {
    // * Some global stuff:
    if (line === "save") {
      save();
    }
    if (line === "inv") {
      console.log(displayInventory());
    }
    if (line === "exit" || line === "quit") {
      console.log(
        "Goodbye! (All your progress were saved to 'savestate.json')"
      );
      process.exit();
    }
    if (line === "cat") {
      console.log("(^ↀᴥↀ^) -oh hi-");
    }
    if (line === "stats") {
      console.log(`Money = ${money}\nInventory: ${inventory} \n`);
    }
    if (line === "help") {
      console.log(data.help);
    }

    // * The actual mechanics:

    // ************** End of: [if statement = command] **************
  } else {
    console.log(
      "Invalid command. All your progress were saved to 'savestate.json', don't worry"
    );
    save();
    process.exit();
  }
});
