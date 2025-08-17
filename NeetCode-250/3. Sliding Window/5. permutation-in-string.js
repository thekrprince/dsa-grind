// LC 567. Permutation in String - https://leetcode.com/problems/permutation-in-string/description/

function checkInclusion(s1, s2) {
    let i = 0;
    const s1Obj = {};
    for (let val of s1) {
        s1Obj[val] = (s1Obj[val] || 0) + 1;
    }
    let count = Object.keys(s1Obj).length;

    for (let j = 0; j < s2.length; j++) {
        const rightChar = s2[j];
        if (rightChar in s1Obj) {
            s1Obj[rightChar]--;
            if (s1Obj[rightChar] === 0) {
                count--;
            }
        }

        if (j - i + 1 < s1.length) {
            continue;
        } else if (j - i + 1 === s1.length) {
            if (count === 0) return true;

            const leftChar = s2[i];
            if (leftChar in s1Obj) {
                s1Obj[leftChar]++;
                if (s1Obj[leftChar] === 1) {
                    count++;
                }
            }
            i++;
        }
    }

    return false;
}

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));