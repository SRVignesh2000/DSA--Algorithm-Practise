// let a = [7, 5, 10, 4, 3, 9];
// let x = "4";
// n =a.length;

// for(i=0; i<n; i++){
//     if(x == a[i]){
//         str = x + "is found"
//         break;
//     }
//     else{
//         str = x + "is Not found" 
//     }
    

// }
// console.log(str);


let a = [2,4,5,2,1];
let x =4;
let count = 0;
let n = a.length

for (i=0; i<n; i++){
    if (x == a[i])
    {
        count++;
    }
}

    if (count == 0)
    {
        console.log(x + "is not found")
    }
    if (count == 1)
    {
        console.log(x + "is found for" + count + "time")
    }
    else{
        console.log(x + "is found for" + count + "times")
    }