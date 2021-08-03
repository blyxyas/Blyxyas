rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
// * colors required (npm install colors)
var colors = require("colors");
// ^ colors required (npm install colors)
require("console-png").attachTo(console);

// ^ terminal-image required (npm install terminal-image)

stages = require("./stages.json");

console.log(
  "::::::::::::\nCommands\n::::::::::::\n\n".yellow +
    "dir - Shows the current directory content\nopen <file-name> - Opens the file\n"
);

rl.on("line", (line) => {
  // * Get the command + input:
  larg = line.split(" ");
  cmd = larg[0];
  arg = larg[1];

  // * Display all directorys:

  if (cmd === "dir") {
    console.log("::::::::::::\nDirectory:\n::::::::::::\n".brightYellow);
    console.log(
      "Length".brightYellow +
        "\t\t Name".brightRed +
        "\t\t Type".brightBlue +
        "\n--------\t --------\t --------".brightYellow
    );
    for (each in stages) {
      if (stages[each].type === "image") {
        console.log(
          `Not available\t ${stages[each].name.bold}  \t ${stages[each].type}`
        );
        return;
      }
      console.log(
        `${stages[each].content.toString().length}\t\t ${
          stages[each].name.bold
        }  \t ${stages[each].type}`
      );
    }
  }

  // * Open the file:
  if (cmd === "open") {
    if (stages[arg].type === "image") {
      console.png(require("fs").readFileSync("./ventir.png"));
    } else {
      console.log(
        "·> ".bold.brightRed + stages[arg].content.toString().brightYellow
      );
    }
  }
});
