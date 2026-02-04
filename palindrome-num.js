let number = 212;
let copy = number;
let rev = 0;

while (number != 0) {
    let rem = number % 10;
    rev = (rev * 10) + rem;
    number = Math.floor(number / 10);
}


if (copy == rev) {
    console.log(`${copy} is Palindrome`);
} else {
    console.log(`${copy} is not palindrome`);
}

