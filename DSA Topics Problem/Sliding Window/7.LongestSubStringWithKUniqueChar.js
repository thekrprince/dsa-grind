// Longest Substring With K Unique Characters
// Given a string, find the length of the longest substring in it with no more than K distinct characters.
// Example 1:
// Input: String="araaci", K=2
// Output: 4
// Explanation: The longest substring with no more than '2' distinct characters is "araa".

// Example 2:
// Input: String="aabacbebebe", K=3
// Output: 7
// Explanation: The longest substring with no more than '3' distinct characters is "cbebebe".

// Example 3:
// Input: String="cbbebi", K=1
// Output: 1
// Explanation: The longest substrings with no more than '1' distinct characters are "c" or "b".

function longestSubstringWithUniqueCharacter(str, k) {
  let i = 0;
  let j = 0;
  let longestSub = 0;

  let map = {};

  while (j < str.length) {
    map[str[j]] = (map[str[j]] || 0) + 1;

    if (Object.keys(map).length < k) {
      j++;
    } else if (Object.keys(map).length === k) {
      longestSub = Math.max(longestSub, j - i + 1);
      j++;
    } else {
      while (Object.keys(map).length > k) {
        map[str[i]] = map[str[i]] - 1;

        if (map[str[i]] === 0) {
          delete map[str[i]];
        }
        i++;
      }
      j++;
    }
  }

  return longestSub;
}

console.log(longestSubstringWithUniqueCharacter("aabacbebebe", 3)); // 7

// Same code with little optimization
function longestSubstringWithUniqueCharacter1(str, k) {
  let i = 0;
  let j = 0;
  let longestSub = 0;
  let uniqueCount = 0;

  let map = {};

  while (j < str.length) {
    const char = str[j];
    map[char] = (map[char] || 0) + 1;

    if (map[char] === 1) uniqueCount++;

    if (uniqueCount < k) {
      j++;
    } else if (uniqueCount === k) {
      longestSub = Math.max(longestSub, j - i + 1);
      j++;
    } else {
      while (uniqueCount > k) {
        const leftChar = str[i];
        map[leftChar] = map[leftChar] - 1;
        if (map[leftChar] === 0) {
          delete map[leftChar];
          uniqueCount--;
        }
        i++;
      }
      j++;
    }
  }

  return longestSub;
}

console.log(longestSubstringWithUniqueCharacter1("aabacbebebe", 3)); // 7
console.log(longestSubstringWithUniqueCharacter1("aaaa", 1)); // 4
console.log(longestSubstringWithUniqueCharacter1("abcba", 2)); // 3
