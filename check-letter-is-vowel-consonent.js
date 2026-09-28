let prompt = require("prompt-sync")();
let ch = prompt("Enter a letter: ");

function checkChar(ch){
    if(!/^[a-zA-Z]$/.test(ch)){
        return "Invalid input. Please enter a single letter.";
    }

    character = ch.toLowerCase();

    if('aeiou'.includes(character)){
        return "The letter is a vowel.";
    }

    return "The letter is a consonant.";
}

let result = checkChar(ch);
console.log(result);