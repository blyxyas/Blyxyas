// Code by Blyxyas (AGC) Jul 2021
// https://github.com/Blyxyas

pREFIX = "-"

fs = require('fs')
src = fs.readFileSync('./source.txt').toString();
o = src.split(pREFIX)

n = 0
expressions = [
    't',
    't2',
    't3', 't4', 't5', 't6'

]

do {
    if ((expressions.indexOf(o[n]) >= 0) == true) {console.log(String.fromCharCode(n) + o[n] + n);}
    else {return;}
    n++;
} while (n <= o.length);