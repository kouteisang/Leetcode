var nthUglyNumber = function(n) {
    let dp = new Array(n).fill(0);
    dp[0] = 1;
    let f2 = 0;
    let f3 = 0;
    let f5 = 0;
    for(let i = 1; i < n; i ++){
        let number = Math.min(dp[f2]*2, dp[f3]*3, dp[f5]*5);
        dp.push(number);
        if(dp[f2]*2 == number) f2 ++;
        if(dp[f3]*3 == number) f3 ++;
        if(dp[f5]*5 == number) f5 ++;
    }
    console.log(dp);
    return dp[n-1];
};

nthUglyNumber(10);