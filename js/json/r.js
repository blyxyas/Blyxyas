fs = require('fs');
PATH = "./data.json"

console.log(fs.readFileSync(PATH).toString())