// LC 69. Sqrt(x)

function sqrt(x) {
    let low = 0;
    let high = x;

    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        if(mid === x/mid) {
            return mid;
        } else if(mid < x/mid) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return high;
}

console.log(sqrt(4));
console.log(sqrt(8));
console.log(sqrt(64));