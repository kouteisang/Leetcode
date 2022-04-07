/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let row = obstacleGrid.length;
    let col = obstacleGrid[0].length;
    if(obstacleGrid[row-1][col-1] == 1) return 0;
    let dp =  new Array(row).fill(0).map(()=>new Array(col).fill(0));
    let flag = true;
    for(let i = 0; i < row; i ++){
        if(obstacleGrid[i][0] == 1){
            flag = false;
        }
        console.log(i)
        if(flag == true){
            dp[i][0] = 1;
        }else{
            dp[i][0] = 0;
        }
    }
    flag = true;
    for(let i = 0; i < col; i ++){
        if(obstacleGrid[0][i] == 1){
            flag = false;
        }
        dp[0][i] = (flag ? 1 : 0);
    }
    for(let i = 1; i < row; i ++){
        for(let j = 1; j < col; j ++){
            if(obstacleGrid[i][j] == 1){
                dp[i][j] = 0;
            }else{
                dp[i][j] = dp[i][j-1] + dp[i-1][j];
            }
        }
    }
    return dp[row-1][col-1];
};
uniquePathsWithObstacles([[0,0],[1,0]])