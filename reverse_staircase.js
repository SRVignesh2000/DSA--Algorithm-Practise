const n = 4
for (let a = 1; a <= n; a++) 
{
  let output = "  ";
  for (let b = a; b>= 1; b--) {
  output += b + " ";
  }
  console.log(output);
}