// LC 853. Car Fleet - https://leetcode.com/problems/car-fleet/description/

function carFleet(target, position, speed) {
    let cars = [];

    for (let i = 0; i < position.length; i++) {
        cars.push([position[i], (target - position[i]) / speed[i]]);
    }

    cars.sort((a, b) => b[0] - a[0]);

    let stack = [];

    for (let [pos, time] of cars) {
        if (stack.length === 0 || time > stack[stack.length - 1]) {
            stack.push(time);
        }
    }

    return stack.length;
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // 3
console.log(carFleet(10, [3], [3])); // 1
console.log(carFleet(100, [0, 2, 4], [4, 2, 1])); // 1