let prompt = require("prompt-sync")();
function getDayFromNumber(dayNumber) {
    let days = ["Monday","Tuesday","Wednusday","Thursday","Friday","Saturday","Sunday"];
    if(dayNumber <1 || dayNumber>7){
        console.log("Invalid input");
    }
    return days[dayNumber-1];
}
let dayNumber = parseInt(prompt("Enter a day number (1-7): "));
console.log(getDayFromNumber(dayNumber));