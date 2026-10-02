let prompt = require("prompt-sync")();
let number = Number(prompt("Enter number: "));
function factorOfNum(n){
    let result = "";
    for(let i = 1; i<=n; i++){
        if(n%i===0){
            result = result + i + " ";
        }
    }
    console.log(result)
}
factorOfNum(number);