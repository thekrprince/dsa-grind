// LC 122 - Best Time to Buy and Sell Stock II

function maxProfit(prices) {
    let totalProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - prices[i - 1];
        if (profit > 0) {
            totalProfit += profit;
        }
    }

    return totalProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 0