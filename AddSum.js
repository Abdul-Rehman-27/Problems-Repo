var addDigits = function(num) {
    let sum = 0;
    while (num != 0) {
        let rem = num % 10;
        sum += rem;
        num = Math.floor(num / 10);
    }

    while (sum > 9) {  
        let sum1 = 0;
        while (sum > 0) {
            let rem1 = sum % 10;
            sum1 += rem1;
            sum = Math.floor(sum / 10);
        }
        sum = sum1;  
    }

    return sum;
};

console.log(addDigits(199));   

