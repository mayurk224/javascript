let prompt = require("prompt-sync")();
let num = Number(prompt("Enter Number: "));
function sumToN(n){
    let result = 0;
    for(let i = 1; i<=n; i++){
        result = result + i;
    }
    console.log(result);
}
sumToN(num)