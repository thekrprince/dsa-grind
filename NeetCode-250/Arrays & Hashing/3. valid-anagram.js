// LC 242 - Valid Anagram

let isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const counter = new Map();

    for (let char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (!counter.get(char) || counter.get(char) === 0) {
            return false;
        }
        counter.set(char, (counter.get(char) || 0) - 1);
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram"));