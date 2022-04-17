/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    let ans = 0;
    let have = new Array(len).fill(0);
    let nohave = new Array(len).fill(0);
    have[0] = -prices[0]; //有股票当前剩余的钱
    nohave[0] = 0; // 没有股票当前剩余的钱
    for(let i = 1; i < len; i ++){
        nohave[i] = Math.max(nohave[i-1], have[i-1] + prices[i]);
        have[i] = Math.max(have[i-1], nohave[i] - prices[i]);
    }
    return nohave[len-1];

};

maxProfit([7,1,5,3,6,4])