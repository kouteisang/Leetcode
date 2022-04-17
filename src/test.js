/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    let len = nums.length;
    let positive = new Array(len).fill(0);
    let negative = new Array(len).fill(0);
    if(nums[0] > 0) positive[0] = 1;
    if(nums[0] < 0) negative[0] = 1;
    let ans  = nums[0] > 0 ? 1 : 0;
    for(let i = 1; i < len; i ++){
        if(nums[i] > 0){
            positive[i] = positive[i-1] + 1;
            negative[i] = negative[i-1] > 0 ? negative[i-1] + 1 : 0;
        }else if(nums[i] < 0){
            positive[i] = negative[i-1] > 0 ? negative[i-1] + 1 : 0;
            negative[i] = positive[i-1] + 1;
        }else if(nums[i] == 0){
            positive[i] = negative[i] = 0;
        }
        ans = Math.max(ans, positive[i]);
    }
    return ans;
};

getMaxLen([0, 1, -2, -3, -4])