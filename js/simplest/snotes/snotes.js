/*
Just a Simple Notes Application.
Write in the writehere.txt file your note, and it will be writed in the 'notes' folder with your personal title.
Syntax:
==========
>Title>Content
==========
Is necessary to put > at the start of each string.
*/

fs = require('fs');

data = fs.readFileSync('./writehere.txt').toString();
o = data.split(">")
title = o[1];
message = o[2];

    fs.appendFile('notes/' + title + '.txt', message, function (err) {
        if (err) throw err;
      });

      fs.writeFile('writehere.txt', '>Title>Content', function (err) {
        if (err) throw err;
      });