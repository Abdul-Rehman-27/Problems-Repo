let s = "anagram";
let t = "nagaram";

let sFreqs = {};
for (let i = 0; i < s.length; i++) {
    if (sFreqs[s[i]]) {
        sFreqs[s[i]]++;
    } else {
        sFreqs[s[i]] = 1;
    }
}

let tFreqs = {};
for (let i = 0; i < t.length; i++) {
    if (tFreqs[t[i]]) {
        tFreqs[t[i]]++;
    } else {
        tFreqs[t[i]] = 1;
    }
}

let sKeys = Object.keys(sFreqs).sort();
let tKeys = Object.keys(tFreqs).sort();

if (sKeys.length !== tKeys.length) {
    console.log(false);
} else {
    let isAnagram = true;

    for (let i = 0; i < sKeys.length; i++) {
        if (sKeys[i] !== tKeys[i]) {
            isAnagram = false;
            break;
        }
        if (sFreqs[sKeys[i]] !== tFreqs[tKeys[i]]) {
            isAnagram = false;
            break;
        }
    }

    console.log(isAnagram);
}
