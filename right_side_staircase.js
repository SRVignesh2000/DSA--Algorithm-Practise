let n = 4;
    let string = "";
    for (let i = 1; i <= n; i++) 
    {
      for (let j = n; j > i; j--) {
          string += "  ";
      }
      for (let k = i; k >= 1; k--) {
          string += k +" ";
      }
      string += "\n";
    }
    console.log(string);