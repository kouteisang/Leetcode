/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => {
        return a-b;
    });
    let len = nums.length;
    let dp = new Array(len).fill(1);
    let ans = 1;
    let pos = 0;
    let res = [];
    for(let i = 0; i < len; i ++){
        res.push([nums[i]]);
    }
    for(let i = 1; i < len; i ++){
        for(let j = 0; j < i; j ++){
            if(nums[i] % nums[j] == 0){
                if(dp[j]+1 >= dp[i]){
                    res[i] = [...res[j]]
                    res[i].push(nums[i]);
                    dp[i] = dp[j]+1;
                    if(dp[i] > ans){
                        ans = dp[i];
                        pos = i;
                    }
                }
            }
        }
    }
    return res[pos];
};

let final = largestDivisibleSubset([4 ,8, 10, 240]);
console.log(final);
