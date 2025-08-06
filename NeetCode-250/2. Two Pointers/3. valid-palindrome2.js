// LC 680 - Valid Palindrome II

function validPalindrome(str) {
    function isPalindrome(l, r) {
        while (l < r) {
            if (str[l] !== str[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str[i] !== str[j]) {
            return isPalindrome(i + 1, j) || isPalindrome(i, j - 1);
        }

        i++;
        j--;
    }
    return true;
}

console.log(validPalindrome("aba")); // true
console.log(validPalindrome("abca")); // true
console.log(validPalindrome("deeee")); // true
console.log(validPalindrome("cbbcc")); // true
console.log(validPalindrome("cbbccc")); // false