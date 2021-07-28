// import filesystem from node
fs = require("fs");
PATH = "./data.json";

// Write to file (in PATH)
function writing(message) {
  fs.writeFile(PATH, message, function (err) {
    if (err) throw err;
  });
}

content = fs.readFileSync(PATH).toString();
writing()

/**
* MyMethod
* * Important information is highlighted
* ! Deprecated method, do not use
* ? Blue
* TODO:
* @param MyParam
**/