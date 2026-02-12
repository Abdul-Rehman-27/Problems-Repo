let str = "abcdabcd";
let pattern = "abc";

for (let i=0; i<=(str.length-pattern.length); i++) {
    let j = 0;
    while ( (j < pattern.length) && (str[i + j] == pattern[j])) {
        j += 1;
    }
    if (j == pattern.length) {
        console.log("Pattern match at index:", i);
    }
}

