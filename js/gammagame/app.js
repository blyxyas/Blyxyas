// Import readline and fs modules.
fs = require( 'fs' );
rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});


// Import the save file, if it exists, else, create a file named "savestate" and start the game.

if (fs.existsSync("./savestate.json")) {
    console.log("savestate file detected in the current repository")
}
savestate = require("./savestate.json");

process.exit()