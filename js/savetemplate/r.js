fs = require("fs");

function readfile() {
    var f = fs.readFileSync("./data.json").toString();
    return f;
}

function writeFile() {
    var f = fs.ReadFileSync("./data.json", readfile());
    return f;
}

console.log(readfile())