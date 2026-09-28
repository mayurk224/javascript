let prompt = require("prompt-sync")();
let string = prompt("Enter string: ");
let consonent = 0;
let vowel = 0;

for(i =0; i< string.length; i++){
    let ch = string.charAt(i);

    switch(ch){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u': vowel++;
        break

        default: consonent++;
    }
}

console.log(consonent);
console.log(vowel);