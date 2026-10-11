let prompt = require("prompt-sync")();
let number = Number(prompt("Enter number: "));

for(let i = 1; i<= number; i++){
    if(number%i===0) process.stdout.write(i+" ")
}