/*
Just a Simple Notes Application.
Write in the writehere.txt file your note, and it will be writed in the 'notes' folder with your personal title.
CMD: Node Snotes
Syntax:
==========
>Title>Content
==========
Is necessary to put > at the start of each string.
*/

fs = require('fs');

it = setInterval(() => {

  data = fs.readFileSync('./writehere.txt').toString();
  o = data.split(">")
  title = o[1];
  message = o[2];
  if (title === 'Title' && message === 'Content') { return; }
  if (o[0] === 'stop') {
    console.log('👌 Ok!')
    fs.writeFile('writehere.txt', '>T>C', function (err) {
      if (err) throw err;
    });
    clearInterval(it)
  }
  if (title !== 'Title' && message !== 'Content') {

    fs.appendFile('notes/' + title + '.txt', message, function (err) {
      if (err) throw err;
    });

    fs.writeFile('writehere.txt', '>Title>Content', function (err) {
      if (err) throw err;
    });
  }
}, 1000);