let prompt = require("prompt-sync")();
function findGreater(a, b, c) {
    let largest = Math.max(a, b, c);
    return largest;
}

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let num3 = Number(prompt("Enter third number: "));
let result = findGreater(num1, num2, num3);
console.log("The greatest number is: " + result);