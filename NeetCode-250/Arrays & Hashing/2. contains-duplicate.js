// LC 217 - Contains Duplicate

let containsDuplicate = function (nums) {
    const obj = {};

    for (let num of nums) {
        if (obj.hasOwnProperty(num)) {
            return true;
        } else {
            obj[num] = 1;
        }
    }

    return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));