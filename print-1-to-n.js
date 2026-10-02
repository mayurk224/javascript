let prompt = require("prompt-sync")();
let num = Number(prompt("Enter number"));
function naturalNumber(n){
    let result = ""
    for(let i = 1; i <= n; i++){
        result = result + i + " ";
    }
    console.log(result)
}

naturalNumber(num);