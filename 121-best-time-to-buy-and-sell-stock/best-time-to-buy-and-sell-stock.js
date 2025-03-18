/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let bp = prices[0];
    let profit = 0;

        for(let i = 1; i < prices.length; i++){
            if( bp> prices[i]){
                bp = prices[i];
            }
            profit = Math.max(profit,prices[i]-bp)
        }
        return profit

};