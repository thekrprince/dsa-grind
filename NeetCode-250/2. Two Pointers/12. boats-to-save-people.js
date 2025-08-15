// LC 881 - Boats to Save People - https://leetcode.com/problems/boats-to-save-people/description/

function numRescueBoats(people, limit) {
    people.sort((a, b) => a - b);
    let minBoatsNeeded = 0;
    let i = 0;
    let j = people.length - 1;

    while (i < j) {
        let sumOfTwoPeopleWeights = people[i] + people[j];
        if (sumOfTwoPeopleWeights <= limit) {
            minBoatsNeeded++;
            i++;
            j--;
        } else {
            minBoatsNeeded++;
            j--;
        }
    }

    if (i === j) {
        minBoatsNeeded++;
    }

    return minBoatsNeeded;
}

console.log(numRescueBoats([1, 2], 3));
console.log(numRescueBoats([3, 2, 2, 1], 3));
console.log(numRescueBoats([3, 5, 3, 4], 3));