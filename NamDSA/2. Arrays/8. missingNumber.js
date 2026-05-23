// LC 268 - Missing Number

function missingNumber(nums) {
    const n = nums.length;
    let totalSum = (n * (n + 1)) / 2;

    let sumOfNums = 0;
    for (let num of nums) {
        sumOfNums += num;
    }

    console.log(totalSum - sumOfNums);
}

missingNumber([2, 3, 0]);
missingNumber([0, 3, 7, 6, 4, 1, 2]);