// LC 128 - Longest Consecutive Sequence

function longestConsecutive(nums) {
    let numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let length = 1;

            while (numSet.has(num + length)) {
                length += 1;
            }

            longest = Math.max(longest, length)
        }
    }

    return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([1, 0, 1, 2])); // 3
console.log(longestConsecutive([0])); // 1
console.log(longestConsecutive([])); // 0