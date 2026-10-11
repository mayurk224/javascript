let prompt=require("prompt-sync")();
let num = Number(prompt("Enter Number: "));

function checkPrime(n) {
  if (n <= 1) {
    console.log("Number is not prime");
    return;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log("Number is not prime");
      return;
    }
  }

  console.log("Number is prime");
}

checkPrime(num);


// for(let i=2;i<inputValue;i++){
//   inputValue%i==0? isprime*=false :isprime*=true;
// };

// alert(`${inputValue} is ${isprime? 'prime':'not prime'} number`);