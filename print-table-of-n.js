let prompt = require("prompt-sync")();
let num = Number(prompt("Enter number: "));

function printTable(n){
    for(let i = 1; i<=10; i++ ){
        console.log(n +"*"+ i +"=" +n*i);
    }
}

printTable(num);