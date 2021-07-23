readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Language (0: Spanish 1: English):

//*************************************
language = 0;

let m;
spanish = {
  intro:
    "Hola! Bienvenido a Tres en Ralla (Tic Tac Toe)! La manera de jugar es: Escribe el número X (Horizontal ─ ) , Y (Vertical | ) \nEjemplo: 2,1 \nEl número no puede ser mayor a 3, porque el tablero del 3 en ralla solo tiene 3 casillas",
  m3: "Tu argumento es mayor a 3 y/o no es un número",
  win: "Has ganado!",
  lost: "Has perdido!",
};

english = {
  intro:
    "Hi! Welcome to Tic Tac Toe! The way to play is: Just write X (Horizontal ─ ) , Y (Vertical | ) axis of your desired box. \ne.g: 2,1\nThe axis cannot be higher than 3",
  m3: "Your argument is higher than 3 or it isn't a number",
  win: "You won!",
  lost: "You lost!",
};

switch (language) {
  case 0:
    m = spanish;
    break;
  case 1:
    m = english;
}

// display intro
console.log(m.intro);
//*************************************

marked = false;
// Matrix:
x1 = ["*", "*", "*"];
x2 = ["*", "*", "*"];
x3 = ["*", "*", "*"];

matrix = [x1, x2, x3];

function repm() {
  console.log(matrix[0]);
  console.log(matrix[1]);
  console.log(matrix[2]);
}

function select(y, x) {
  if (x > 3 || y > 3) {
    console.log(m.m3);
  } else {
    matrix[y - 1][x - 1] = "X";
    repm();
  }
}

// @@@@@@@@@@@@@@@ Main:
repm();
readline.on("line", (line) => {
  if (line === "exit") {
    process.exit();
  }

  coord = line.split(",");
  select(coord[0], coord[1]);

  // Check if win state

  // CHECK PLAYER

  let win;
  let lost;
  if (
    (matrix[0][0] === "X" && matrix[0][1] === "X" && matrix[0][2] === "X") ||
    (matrix[1][0] === "X" && matrix[1][1] === "X" && matrix[1][2] === "X") ||
    (matrix[2][0] === "X" && matrix[2][1] === "X" && matrix[2][2] === "X") ||
    (matrix[1][0] === "X" && matrix[1][1] === "X" && matrix[1][2] === "X") ||
    (matrix[2][0] === "X" && matrix[1][1] === "X" && matrix[0][2] === "X") ||
    (matrix[0][0] === "X" && matrix[1][1] === "X" && matrix[2][2] === "X")
  ) {
    win = true;
  }

  // CHECK IA
  else if (
    (matrix[0][0] === "O" && matrix[0][1] === "O" && matrix[0][2] === "O") ||
    (matrix[1][0] === "O" && matrix[1][1] === "O" && matrix[1][2] === "O") ||
    (matrix[2][0] === "O" && matrix[2][1] === "O" && matrix[2][2] === "O") ||
    (matrix[1][0] === "O" && matrix[1][1] === "O" && matrix[1][2] === "O") ||
    (matrix[2][0] === "O" && matrix[1][1] === "O" && matrix[0][2] === "O") ||
    (matrix[0][0] === "O" && matrix[1][1] === "O" && matrix[2][2] === "O")
  ) {
    lost = true;
  }

  if (win === true) {
    console.log(m.win);
  } else if (lost === true) {
    console.log(m.lost);
  }
  else {
    ai();
  }
});




      //*******************************************************************
      // Main AI

      // Copyright Blyxyas 2021 Jul github.com/Blyxyas
      //*******************************************************************
      
      
      function ai() {
 
      }