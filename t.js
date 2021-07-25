y = Math.floor(Math.random() * 3);
    x = Math.floor(Math.random() * 3);
    
    function checkingaxis() {
      if (matrix[y][x] === mark || matrix[y][x] === antimark) {
        y = Math.floor(Math.random() * 3);
        checkingaxis();
      } else {
        return y, x;
      }
    }