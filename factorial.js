console.log("Factorial")
let number = 4;
let fact = 1;

for (let i=number; i>=1; i--){
    fact *= i;
}
console.log(`Factorial of ${number} is:${fact}`)