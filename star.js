let n = 4;
let x = "";
for(i=1; i<=n; i++)
{
  for(j=n; j>i; j--)
  {
    x += "..";
  }
  for(k=1; k<=i; k++)
  {
    x += k + " ";
  }
  for(l=i-1; l>=1; l--)
  {
    x += l + " ";
  }

  x += "\n";
}

for(a=1; a<n; a++)
{
  for(b=1; b<=a; b++)
  {
    x += "..";
  }
  for(c=1; c<=n-a; c++)
  {
    x += c + " ";
  }
  for(d=n-a-1; d>=1; d--)
  {
    x+= d + " ";
  }
  x += "\n";
}
console.log(x);