//can be found at: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

function maxProfit(prices) {
  let profit = 0;
  let purchase = prices[0];

  for(let i = 0; i < prices.length; i++) {
    if(prices[i] < purchase) purchase = prices[i];
    else profit = Math.max(profit, prices[i] - purchase);
  }
  return profit;
}

/* TC
console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([2,4,1]))
*/
