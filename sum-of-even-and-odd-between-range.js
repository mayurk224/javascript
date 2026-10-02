let prompt = require("prompt-sync")();
let start = Number(prompt("Enter start: "));
let end = Number(prompt("Enter end: "));
function sumEvenOddInRange(s,e){
    let evenSum = 0;
    let oddSum = 0;
    for(let i = s; i <= e; i++){
        if(i%2===0){
            evenSum = evenSum + i;
        } else {
            oddSum = oddSum + i;
        }
    }
    console.log(evenSum,oddSum);
}
sumEvenOddInRange(start,end)