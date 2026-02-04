console.log("Hello World");

let arr = [-2,3,4,5,-6,-7];
let largestNum = arr[0];
for(let i=0; i<arr.length; i++){
    if (arr[i]>largestNum && arr[i]>0){
        largestNum = arr[i];
    } 
}
console.log("Largest Number with Positive Integer is:", largestNum)