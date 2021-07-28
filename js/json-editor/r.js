// WIP
// import fs from fs ↓
fs = require("fs");

//import the local file
PATH = "./data.json";
data = require(PATH);

// Read the data
console.log(JSON.stringify(data.d));
data.d += "hi"

// Write to file (in 'data')
  fs.writeFile('./datax.json ', JSON.stringify(data.d), function (err) {
    if (err) throw err;
  });
