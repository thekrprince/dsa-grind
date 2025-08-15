// LC 121. Best Time to Buy and Sell Stock - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function maxProfit(prices) {
    let i = 0;
    let j = 1;
    let profit = 0;

    while (j < prices.length) {
        if (prices[i] < prices[j]) {
            let currentProfit = prices[j] - prices[i];
            profit = Math.max(profit, currentProfit);
        } else {
            i = j;
        }
        j++;
    }

    return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));