// n=5 (1 2 3 4 5 4 3 2 1)
let x = "";
for (i=1; i<=5; i++)
{
  x = x + i + " ";
}

for (i=4; i>=1; i--)
{
  x = x + i + " ";
}
console.log(x);