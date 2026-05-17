// ["raceacar", "madam", "radar"]
// Time complexity -> O(n x m)

function isArrayOfStringsPalindrome(arr) {
    if (arr.length === 0) return true;

    for (let str of arr) {
        let left = 0;
        let right = str.length - 1;

        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
    }

    return true;
}

const arr1 = ["racecar", "madam", "radar"];
console.log(isArrayOfStringsPalindrome(arr1));

const arr2 = ["racecar", "madan", "radar"];
console.log(isArrayOfStringsPalindrome(arr2));