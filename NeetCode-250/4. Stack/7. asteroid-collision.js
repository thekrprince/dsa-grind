// LC 735. Asteroid Collision - https://leetcode.com/problems/asteroid-collision/description/

// Time Complexity -> O(n) -> Although there’s a nested while loop, each asteroid is pushed and popped at most once, 
// so the total number of stack operations is linear. Therefore the time complexity is O(n) via amortized analysis.

function asteroidCollision(asteroids) {
    let stack = [];

    for (let asteroid of asteroids) {
        let isDestroyed = false;

        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            if (stack[stack.length - 1] > -asteroid) {
                isDestroyed = true;
                break;
            } else if (stack[stack.length - 1] === -asteroid) {
                isDestroyed = true;
                stack.pop();
                break;
            } else {
                stack.pop();
            }
        }

        if (!isDestroyed) {
            stack.push(asteroid);
        }
    }

    return stack;
}

console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));