// LC 875 - Koko Eating Bananas
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

function minEatingSpeed(piles, h) {
    let left = 1;
    let right = Math.max(...piles);

    while (left <= right) {
        let k = Math.floor((left + right) / 2);

        let hrsTakingToEat = 0;

        for (let pile of piles) {
            hrsTakingToEat += Math.ceil(pile / k);
        }

        if (hrsTakingToEat > h) {
            left = k + 1;
        } else {
            right = k - 1;
        }
    }

    return left;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));