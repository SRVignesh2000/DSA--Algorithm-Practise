for (let i = n - 1; i >= 1; i--) 
    {
      for (let j = 1; j <= n - i; j++) {
      string += " ";
      }
      for (let k = 1; k <= i; k++) {
      string += i + " ";
      }
      string += "\n";
    }
    console.log(string);