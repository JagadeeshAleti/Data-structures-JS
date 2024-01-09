// First approach 
function isAnagram(source, target) {
    const s = source.split("").sort().join("");
    const t = target.split("").sort().join("");
    return s === t;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("car", "ra"));


// Second approach
function checkAnagram(source, target) {
    if (source.length !== target.length) {
        return false
    }
    let s = {}, t = {};


    for (let pos = 0; pos < source.length; pos++) {
        let sChar = source[pos];
        let tChar = target[pos];
        s[sChar] = (s[sChar] || 0) + 1;
        t[tChar] = (t[tChar] || 0) + 1;
    }

    for (const key in s) {
        if (s[key] !== t[key]) {
            return false;
        }
    }
    return true;
}

console.log(checkAnagram("anagram", "nagaram"));
console.log(isAnagram("car", "ra"));
console.log(isAnagram("car", "rac"));