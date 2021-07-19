fs = require('fs')
function writing(file, content) {
    fs.writeFile(file + '.txt', content, function (err) {
        if (err) return console.log(err);
        console.log(file + ' > ' + content);
      });
}

function reading(file) {
   var content =  fs.readFileSync('./'+file+'.txt');
    return content
}

n = 0
do {
   ip =  reading(inputs).toString();
}
while (n <= ip.split("").length)