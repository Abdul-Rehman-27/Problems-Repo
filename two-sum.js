let nums = [3, 2, 4];
let target = 6;

let i = 0;
let arr = [];

while (i < nums.length) {
    let num = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
        let sum = num + nums[j];

        if (sum === target) {
            arr.push(i, j);
            console.log("Indexes:", arr);
            console.log("Values:", nums[i], nums[j]);
        }
    }
    i++;
}

