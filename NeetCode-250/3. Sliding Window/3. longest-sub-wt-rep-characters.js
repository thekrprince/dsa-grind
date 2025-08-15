// LC 3. Longest Substring Without Repeating Characters - https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

function lengthOfLongestSubString(s) {
    let longestLength = 0;
    let i = 0;
    let j = 0;
    let sMap = {};

    while (j < s.length) {
        let rightChar = s[j];
        sMap[rightChar] = (sMap[rightChar] || 0) + 1;
        const count = Object.keys(sMap).length;

        if (j - i + 1 === count) {
            longestLength = Math.max(longestLength, j - i + 1);
        } else if (j - i + 1 > count) {
            while (j - i + 1 > count) {
                const leftChar = s[i];
                sMap[leftChar]--;
                if (sMap[leftChar] === 0) {
                    delete sMap[leftChar];
                }
                i++;
            }
        }
        j++;
    }

    return longestLength;
}

console.log(lengthOfLongestSubString("abcabcbb"));
console.log(lengthOfLongestSubString("bbbbb"));
console.log(lengthOfLongestSubString("pwwkew"));