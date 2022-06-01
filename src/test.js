/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount == 0) return 0;
    let dp = new Array(amount + 3).fill(Number.MAX_SAFE_INTEGER);
    let cnt = 0;
    for(let i = 0; i <= amount; i += coins[0]){
        dp[i] = ++cnt-1;
    }
    dp[0] = 0;
    let len = coins.length;
    for(let i = 1; i < len; i ++){
        for(let j = 0; j <= amount; j ++){
            if(j >= coins[i]){
                dp[j] = Math.min(dp[j], dp[j-coins[i]]+1);
            }
        }
    }
    return dp[amount] == 0 ? -1 : dp[amount];
};

let ans = coinChange([2, 5, 10, 1], 27);
console.log(ans)