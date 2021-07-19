/*
El método de encryptación es simple de entender y crear pero dificil de entender, tendría varias contraseñas, podrían ser infinitas.
El método APACGE es: Cada uno de los carácteres tiene un valor CharCode (ej: Æ --> 198), después se suman esos códigos y se buscan en esa suma dé un número específico (Si lo piensas bien, es parecido a la búsqueda del HASH de Bitcoin) En este caso es el 21061, pero dependiendo de la longitud (y dificultad) puede variar, cuantos más dígitos seguramente tengan más soluciones.

Número a buscar: 21061.
Dígitos máximos a usar: 11.

Con 11 dígitos el máximo me parece que es cerca de 100K, pero hay algunos márgenes con números especialmente difíciles de conseguir (Ej: 10K - 17K);
Ejemplo de respuesta: ▼þ▼þþþþdþu
*/

fs = require('fs');
win = false
function sum(arr){
    var sum = 0;
    for (var i = 0; i< arr.length; i++){
     sum += arr[i];
    }
    
    console.log(sum);
    return sum;
}

function writing(file, content) {
    fs.writeFile(file + '.txt', content, function (err) {
        if (err) return console.log(err);
        console.log(file + ' > ' + content);
      });
}

function reading(file) {
   var content =  fs.readFileSync('./'+file+'.txt');
    return content;
}
setInterval(() => {
    if (win === false) {
if (reading('inputs').toString().length > 11) {
    console.log('The response is less than 11 characters...');
}}

n = 0;
chars = [];
do {
   ip =  reading('inputs').toString();
   chars.push(ip.charCodeAt(n));
   console.log(chars);
   n++;
}
while (n < ip.length);
input = sum(chars)

if (input === 21061) {
    win = true
    console.log('Felicidades... Lo has hecho')
    writing('inputs', 'Lo hiciste, felicidades, esta es mi cuenta bancaria ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓')
}}, 1000);