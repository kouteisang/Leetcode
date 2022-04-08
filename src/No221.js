/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let ans = 0;
    let dp = new Array(row).fill(0).map(() => new Array(col).fill(0));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i == 0 || j == 0) {
                dp[i][j] = matrix[i][j] - '0';
                ans = Math.max(ans, dp[i][j]);
                continue;
            }
            if (matrix[i][j] == '0') {
                dp[i][j] = 0;
            } else if (matrix[i][j] == '1') {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1;
            }
            ans = Math.max(ans, dp[i][j]);
        }
    }
}
maximalSquare([[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]]);
