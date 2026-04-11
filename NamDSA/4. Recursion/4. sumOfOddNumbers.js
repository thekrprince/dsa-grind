
let arr = [5, 3, 4, 6, 9];

function sum(n) {
    const isOdd = arr[n] % 2 === 1;
    if (n === 0) {
        return isOdd ? arr[n] : 0;
    }

    return isOdd ? arr[n] + sum(n - 1) : 0 + sum(n - 1);
}

console.log(sum(arr.length - 1));