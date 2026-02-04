console.log("Hello World");
let number = 357;
let sum = 0;

while(number!=0){
    rem = number%10;
    sum += rem;
    number = Math.floor(number/10);
}

console.log("Sum of Digit in a number is:", sum)