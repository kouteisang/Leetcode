/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    let len = nums.length;
    let presum = new Array(len).fill(len+1);
    for(let i = 0; i < len; i ++){
        if(nums[i] >= k) return 1;
        presum[i+1] = presum[i] + nums[i];
    }
    let ans = Number.MAX_SAFE_INTEGER;
    let queue = [];
    for(let i = 0; i < len+1; i ++){
        while(queue.length > 0 && presum[i] <= presum[queue[queue.length-1]]){
            queue.pop();
        }
        while(queue.length > 0 && presum[i] - presum[queue[0]] >= k){
            ans = Math.min(ans, i - queue[0]);
            queue.shift();
        }
        queue.push(i);
    }
    if(ans == Number.MAX_SAFE_INTEGER) return -1;
    return ans;
};