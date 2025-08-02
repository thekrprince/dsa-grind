// LC 238 - Product of Array Except Self

function productExceptSelf(nums) {
    let res = [];

    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }

    for (let j = nums.length - 2; j >= 0; j--) {
        postfix *= nums[j + 1];
        res[j] *= postfix;
    }
    return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));