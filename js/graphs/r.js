console.clear();
//**********************************
// Your stats:
stats = [43, 54, 75, 43, 76];
//**********************************

// Import readline + interface
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Round a number to the nearest multiple of 5
function round(x) {
  return Math.round(x / 5) * 5;
}

//↑ By GeeksforGeeks https://www.geeksforgeeks.org/round-off-a-number-to-the-next-multiple-of-5-using-javascript/

// Main:

console.log(
  "'graph' to visualize a bars graph (with ascii and in vertical, rotate your head.) with 0 mid steps \n 'num1' to visualize the numbers with a mid step \n 'num2' to visualize the numbers with 3 mid steps \n\n Ctrl + C to close terminal"
);

n = 0;
readline.on("line", (line) => {
  if (line === "num1") {
    do {
      if (typeof stats[n] !== "number" || typeof stats[n + 1] !== "number") {
        return;
      } else {
        console.log(stats[n]);
        console.log((stats[n] + stats[n + 1]) / 2);
        n++;
      }
    } while (n <= stats.length);
  }

  if (line === "num2") {
    do {
      if (typeof stats[n] !== "number" || typeof stats[n + 1] !== "number") {
        return;
      } else {
        output = (stats[n] + stats[n + 1]) / 2;
        console.log(stats[n]);
        console.log((stats[n] + output) / 2);
        console.log(output);
        console.log((stats[n + 1] + output) / 2);
        n++;
      }
    } while (n <= stats.length);
  }

  if (line === "graph") {
    do {
      // Number to percentage of highest number in 'stat' ░▒▓
      bar = (stats[n] * 100) / Math.max.apply(null, stats);
      switch (round(bar)) {
        case 0:
          bst = "░░░░░░░░░░";
          console.log(bst);
          break;
        case 5:
          bst = "▒░░░░░░░░░";
          console.log(bst);
          break;
        case 10:
          bst = "▓░░░░░░░░░";
          console.log(bst);
          break;
        case 15:
          bst = "▓▒░░░░░░░░";
          console.log(bst);
          break;
        case 20:
          bst = "▓▓░░░░░░░░";
          console.log(bst);
          break;
        case 25:
          bst = "▓▓▒░░░░░░░";
          console.log(bst);
          break;
        case 30:
          bst = "▓▓▓░░░░░░░";
          console.log(bst);
          break;
        case 35:
          bst = "▓▓▓▒░░░░░░";
          console.log(bst);
          break;
        case 40:
          bst = "▓▓▓▓░░░░░░";
          console.log(bst);
          break;
        case 45:
          bst = "▓▓▓▓▒░░░░░";
          console.log(bst);
          break;
        case 50:
          bst = "▓▓▓▓▓░░░░░";
          console.log(bst);
          break;
        case 55:
          bst = "▓▓▓▓▓▒░░░░";
          console.log(bst);
          break;
        case 60:
          bst = "▓▓▓▓▓▓░░░░";
          console.log(bst);
          break;
        case 65:
          bst = "▓▓▓▓▓▓▒░░░";
          console.log(bst);
          break;
        case 70:
          bst = "▓▓▓▓▓▓▓░░░";
          console.log(bst);
          break;
        case 75:
          bst = "▓▓▓▓▓▓▓▒░░";
          console.log(bst);
          break;
        case 80:
          bst = "▓▓▓▓▓▓▓▓░░";
          console.log(bst);
          break;
        case 85:
          bst = "▓▓▓▓▓▓▓▓▒░";
          console.log(bst);
          break;
        case 90:
          bst = "▓▓▓▓▓▓▓▓▓░";
          console.log(bst);
          break;
        case 95:
          bst = "▓▓▓▓▓▓▓▓▓▒";
          console.log(bst);
          break;
        case 100:
          bst = "▓▓▓▓▓▓▓▓▓▓";
          console.log(bst);
          break;
      }
      n++;
    } while (n <= stats.length);
  }
});

// ░▒▓
