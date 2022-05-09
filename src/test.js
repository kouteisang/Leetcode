/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let ans = 0;
    let mul = 1;
    let len = nums.length;
    let left = 0;
    let right = -1;
    while(right < len){
        right ++;
        if(right >= len) break;
        mul *= nums[right];
        while(mul >= k && left <= right){
            mul /= nums[left];
            left ++;
        }
        ans += right-left + 1;
    }
    return ans;
};

numSubarrayProductLessThanK([10, 5, 2, 6], 100);