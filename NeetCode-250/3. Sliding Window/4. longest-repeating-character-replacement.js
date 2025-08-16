// LC 424. Longest Repeating Character Replacement

function characterReplacement(s, k) {
    let i = 0;
    let j = 0;
    let map = {};
    let maxFreq = 0;
    let longestSub = 0;

    while (j < s.length) {
        const rightChar = s[j];
        map[rightChar] = (map[rightChar] || 0) + 1;
        maxFreq = Math.max(maxFreq, map[rightChar]);
        const diff = j - i + 1 - maxFreq;

        if (diff <= k) {
            longestSub = Math.max(longestSub, j - i + 1);
        } else {
            const leftChar = s[i];
            map[leftChar]--;
            i++;
        }
        j++;
    }

    return longestSub;
}

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));