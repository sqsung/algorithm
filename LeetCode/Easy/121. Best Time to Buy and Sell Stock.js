const maxProfit = prices => {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i += 1) {
    const currentPrice = prices[i];

    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    if (currentPrice < minPrice) minPrice = currentPrice;
  }

  return maxProfit;
};
