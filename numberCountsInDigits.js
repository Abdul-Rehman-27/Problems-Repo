console.log("We are Counting Digits in number")
let num = 2346;
let count = 0;

while (num!=0){ 
    num = Math.floor(num/10);
    count++;   
}

console.log(count)
