let prompt = require("prompt-sync")();
let num = Number(prompt("Enter number: "));
function factorial(n){
    let fact = 1;
    for(let i = 1; i <= n; i ++){
        fact = fact * i;
    }
    console.log(fact);
}
factorial(num);