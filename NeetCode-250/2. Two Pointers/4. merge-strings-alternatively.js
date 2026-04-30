// LC 1768 - Merge Strings Alternately - https://leetcode.com/problems/merge-strings-alternately/description/

function mergeAlternately(word1, word2) {
    let i = 0;

    let res = "";

    while (i < word1.length || i < word2.length) {
        if (i < word1.length) {
            res = res + word1[i];
        }
        if (i < word2.length) {
            res = res + word2[i];
        }
        i++;
    }

    return res;
}

console.log(mergeAlternately("abc", "pqr")); // apbqcr
console.log(mergeAlternately("ab", "pqrs")); // apbqrs
console.log(mergeAlternately("abcd", "pq"));  // apbqcd