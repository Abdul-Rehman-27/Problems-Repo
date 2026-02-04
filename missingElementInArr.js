let arr = [1, 3, 5];
let idx = 0;
while (idx <= arr.length) {
    if ( arr[idx] == idx+1 ) {
        idx += 1;
    } else {
        console.log(`${idx+1} is missing in array`);
        idx += 1;
    }
}

Pla
