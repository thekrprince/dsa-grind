// LC 238 - Product of Array Except Self
/* 
 - To achieve this we can use prefix and postfix
 - Take a variable to store the result
 - Take prefix and postfix var, and initialize that with 1
 - Run a loop and multiply from left to right except last value
 - Run a backward loop, multiply the value stored in res with it
*/

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