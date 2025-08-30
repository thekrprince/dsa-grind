// LC 76. Minimum Window Substring - https://leetcode.com/problems/minimum-window-substring/description/

function minWindow(s, t) {
    let minWindow = Infinity;
    let minStr = s;

    const tObj = {};

    for (let val of t) {
        tObj[val] = (tObj[val] || 0) + 1;
    }

    let i = 0;
    let count = Object.keys(tObj).length;

    for (let j = 0; j < s.length; j++) {
        const rightChar = s[j];

        if (rightChar in tObj) {
            tObj[rightChar]--;
            if (tObj[rightChar] === 0) {
                count--;
            }
        }

        while (count === 0) {
            minWindow = Math.min(minWindow, j - i + 1);

            if (minWindow < minStr.length) {
                minStr = s.substring(i, j + 1);
            }

            const leftChar = s[i];
            if (leftChar in tObj) {
                tObj[leftChar]++;
                if (tObj[leftChar] > 0) {
                    count++;
                }
            }
            i++;
        }
    }

    return minWindow === Infinity ? "" : minStr;
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));