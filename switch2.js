let prompt = require("prompt-sync")();
console.log("Enter 1 to calculate area of rectangle");
console.log("Enter 2 to calculate area of square");
console.log("Enter 3 to calculate are of triangle");
let n = Number(prompt());

switch(n){
    case 1:{
        let len = Number(prompt("Enter length of rectangle: "));
        let bre = Number(prompt("Enter breadth of rectangle: "));

        let area = len * bre;
        console.log("rectangle area : "+area);
        
        break;
    }
    case 2:{
        let side = Number(prompt("Enter value of side of square: "));
        let area = side * side;
        console.log("square area : "+area);
        break;
    }
    case 3:{
        let base = Number(prompt("Enter base of triangle: "));
        let height = Number(prompt("Enter height of triangle: "));
        let area = 0.5 * base * height;
        console.log("triangle area : "+area);
        break;
    }

    default: console.log("not valid")
}