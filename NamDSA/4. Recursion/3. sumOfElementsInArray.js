// Approach 1
function sumOfArray(arr) {
    if (arr.length === 1) return arr[0];

    return arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray([5, 3, 2, 0, 1]));

// Approach 2
let arr = [10, 5, 4, 2, 0, 9];

function sumOfArray1(n) {
    if (n === 0) return arr[n];

    return arr[n] + sumOfArray1(n - 1);
}

console.log(sumOfArray1(arr.length - 1));