// 3 superstar 5 rajini 15 superstar rajini
for( let i = 1; i<=15 ; i++)
    {
        if (i % 5 === 0 && i % 3 === 0){
        console.log("Superstar Ranjinikanth");
        }
        else if (i % 5 === 0){
        console.log("Ranjinikanth");
        }
        else if (i % 3 === 0){
        console.log("Superstar");
        }
        else{
        console.log(i)
        }
    }