// WIP
// import fs from fs ↓
fs = require("fs");

//import the local file
PATH = "./data.json";
editTo = "./datax.json"
data = require(PATH);

// Read the data
message = JSON.stringify(data.d);
message += "si"

// Write to file (in 'data')
  fs.writeFile(editTo, message, function (err) {
    if (err) throw err;
  });
