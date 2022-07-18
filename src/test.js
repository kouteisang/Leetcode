let value = [0, 8, 10, 4, 5, 5];
let weight = [0, 6, 4, 2, 4, 3];

let dp = new Array(6).fill(0).map(()=>new Array(11).fill(0));
for(let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        if (j >= weight[i]) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
        } else {
            dp[i][j] = dp[i - 1][j];
        }
    }
}
