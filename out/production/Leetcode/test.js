/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    let len = nums.length;
    let ans = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let right = 0;
    let sum = 0;
    while(left <= right && right < len){
        while(left <= right && right < len && sum < k){
            sum += nums[right];
            if(sum >= k){
                ans = Math.min(right - left+1, ans);
            }
            right ++;
        }
        while(left <= right && sum >= k){
            sum -= nums[left];
            if(sum >= k){
                ans = Math.min(right-1 - left, ans);
            }
            left ++;
        }
    }
    if(ans == Number.MAX_SAFE_INTEGER) ans = -1;
    return ans;
};

let ans = shortestSubarray([84, -37, 32, 40, 95],167);
console.log(ans);