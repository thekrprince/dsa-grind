// LC 125 - Valid Palindrome

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (/[a-zA-Z0-9]/.test(s[left]) === false) {
            left++;
        } else if (/[a-zA-Z0-9]/.test(s[right]) === false) {
            right--;
        } else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        } else {
            left++;
            right--;
        }
    }

    return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true