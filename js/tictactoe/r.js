// README FIRST!!!!!
// This is a game of Tic Tac Toe.
// You play against my AI.
// Maybe I can create a multiplayer mode idk
// Soo... First, select your language in this variable:

// "es" = Spanish, "en" = English
language = "es";

// Important !!! ↓
// Change the variable to deff if you want to use the deffensive algorithm, or off if you want to use the offensive algorithm! (Are the same process but in different order)
state = "deff";

// If you want to customize some things, just change the variables below!:

// Player's mark:
mark = "O";
// AI's mark:
antimark = "✖";

// Clear console before each turn ?:
clearing = true;

// Thx for reading this!
// My AI is not very good, but it's a start jeje.

//Blyxyas 2021 Jul github.com/Blyxyas
//*******************************************************************

// Some auxiliar variables:
turn = 0;

readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let m;
spanish = {
  intro:
    "Hola! Bienvenido a Tres en Ralla (Tic Tac Toe)! La manera de jugar es: Escribe el número X (Horizontal ─ ) , Y (Vertical | ) \nEjemplo: 2,1 \nEl número no puede ser mayor a 3, porque el tablero del 3 en ralla solo tiene 3 casillas",
  m3: "Tu argumento es mayor a 3 y/o no es un número",
  win: "Has ganado!",
  lost: "Has perdido!",
  coord: "Esas coordenadas ya estaban marcadas",
};

english = {
  intro:
    "Hi! Welcome to Tic Tac Toe! The way to play is: Just write X (Horizontal ─ ) , Y (Vertical | ) axis of your desired box. \ne.g: 2,1\nThe axis cannot be higher than 3",
  m3: "Your argument is higher than 3 or it isn't a number",
  win: "You won!",
  lost: "You lost!",
  coord: "Those coordinates were already marked!",
};

switch (language) {
  case "es":
    m = spanish;
    break;
  case "en":
    m = english;
}

// display intro
console.log(m.intro);
//*************************************

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

repm();
function select(y, x) {
  if (x > 3 || y > 3) {
    console.log(m.m3);
  } else {
    if (matrix[y - 1][x - 1] === mark || matrix[y - 1][x - 1] === antimark) {
      console.log(m.coord);
      return;
    } else {
      matrix[y - 1][x - 1] = mark;
      repm();
    }
  }
}

// @@@@@@@@@@@@@@@ Main:
readline.on("line", (line) => {
  if (line === "exit") {
    process.exit();
  }

  coord = line.split(",");
  select(coord[0], coord[1]);

  // CHECK PLAYER

  let win;
  let lost;
  if (
    // Horizontal
    (matrix[0][0] === mark && matrix[0][1] === mark && matrix[0][2] === mark) ||
    (matrix[1][0] === mark && matrix[1][1] === mark && matrix[1][2] === mark) ||
    (matrix[2][0] === mark && matrix[2][1] === mark && matrix[2][2] === mark) ||
    // Vertical
    (matrix[0][0] === mark && matrix[1][0] === mark && matrix[2][0] === mark) ||
    (matrix[0][1] === mark && matrix[1][1] === mark && matrix[2][1] === mark) ||
    (matrix[0][2] === mark && matrix[1][2] === mark && matrix[2][2] === mark) ||
    // Diagonal
    (matrix[1][0] === mark && matrix[1][1] === mark && matrix[1][2] === mark) ||
    (matrix[2][0] === mark && matrix[1][1] === mark && matrix[0][2] === mark) ||
    (matrix[0][0] === mark && matrix[1][1] === mark && matrix[2][2] === mark)
  ) {
    win = true;
  }

  // CHECK IA
  else if (
    (matrix[0][0] === antimark &&
      matrix[0][1] === antimark &&
      matrix[0][2] === antimark) ||
    (matrix[1][0] === antimark &&
      matrix[1][1] === antimark &&
      matrix[1][2] === antimark) ||
    (matrix[2][0] === antimark &&
      matrix[2][1] === antimark &&
      matrix[2][2] === antimark) ||
    (matrix[0][0] === antimark &&
      matrix[1][0] === antimark &&
      matrix[2][0] === antimark) ||
    (matrix[0][1] === antimark &&
      matrix[1][1] === antimark &&
      matrix[2][1] === antimark) ||
    (matrix[0][2] === antimark &&
      matrix[1][2] === antimark &&
      matrix[2][2] === antimark) ||
    (matrix[1][0] === antimark &&
      matrix[1][1] === antimark &&
      matrix[1][2] === antimark) ||
    (matrix[2][0] === antimark &&
      matrix[1][1] === antimark &&
      matrix[0][2] === antimark) ||
    (matrix[0][0] === antimark &&
      matrix[1][1] === antimark &&
      matrix[2][2] === antimark)
  ) {
    lost = true;
  }

  if (win === true) {
    console.log(m.win);
  } else if (lost === true) {
    console.log(m.lost);
  } else {
    function process() {
      console.log("AI:");
      ai(state);
      repm();
      turn++;
      console.log(turn);
    }
    if (clearing === true) {
      console.clear();
      process();
    } else {
      process();
    }
  }
});

// Main AI
// This is my first AI fully made by me (/≧▽≦)/
//*********************************

function ai(state) {
  switch (state) {
    case "deff":
      deffensive();
      offensive();
      break;
    case "off":
      offensive();
      deffensive();
  }

  function deffensive() {
    y = 0;
    x = 0;
    while (y < 3) {
      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      // DEFENSIVE
      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      // X X -
      if (matrix[y][x] === mark && matrix[y][x + 1] === mark) {
        // X X O
        if (matrix[y][x + 2] !== antimark) {
          matrix[y][x + 2] = antimark;
          return;
        }
      }
      // X - X
      if (matrix[y][x] === mark && matrix[y][x + 2] === mark) {
        if (matrix[y][x + 1] !== antimark) {
          matrix[y][x + 1] = antimark;
          return;
        }
      }

      // X
      // X
      // -

      if (matrix[y][x] === mark && matrix[y + 1][x] === mark) {
        if (matrix[y + 2][x] !== antimark) {
          matrix[y + 2][x] = antimark;
          return;
        }
      }

      // X
      // -
      // X

      if (matrix[y][x] === mark && matrix[y + 2][x] === mark) {
        if (matrix[y + 1][x] !== antimark) {
          matrix[y + 1][x] = antimark;
          return;
        }
      }

      // -
      // X
      // X
      if (matrix[1][x] === mark && matrix[2][x] === mark) {
        if (matrix[0][x] !== antimark) {
          matrix[0][x] = antimark;
          return;
        }
      }

      // X
      //   X
      //     -

      if (matrix[0][0] === mark && matrix[1][0] === mark) {
        if (matrix[2][2] !== antimark) {
          matrix[2][2] = antimark;
          return;
        }
      }

      //    X
      //   X
      //  -

      if (matrix[0][2] === mark && matrix[1][1] === mark) {
        if (matrix[2][0] !== antimark) {
          matrix[2][0] = antimark;
          return;
        }
      }

      // X
      //   -
      //     X

      if (matrix[0][0] === mark && matrix[2][2] === mark) {
        if (matrix[1][1] !== antimark) {
          matrix[1][1] = antimark;
          return;
        }
      }

      // -
      //  X
      //   X

      if (matrix[1][1] === mark && matrix[2][2] === mark) {
        if (matrix[0][0] !== antimark) {
          matrix[0][0] = antimark;
          return;
        }
      }

      //   X
      //  -
      // X

      if (matrix[0][2] === mark && matrix[2][0] === mark) {
        if (matrix[1][1] !== antimark) {
          matrix[1][1] = antimark;
          return;
        }
      }

      //   -
      //  X
      // X

      if (matrix[1][1] === mark && matrix[2][0] === mark) {
        if (matrix[0][2] !== antimark) {
          matrix[0][2] = antimark;
          return;
        }
      }

      y++;
    }
  }

  function offensive() {
    y = 0;
    x = 0;
    while (y < 3) {
      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      // OFFENSIVE
      // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
      y++;
    }
  }
}
