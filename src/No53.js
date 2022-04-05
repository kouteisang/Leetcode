/**
 * @param {number[]} nums
 * @return {number}
 */

const divide = (nums, left, right) => {
    if(left == right) return nums[left];
    let mid = Math.floor((left + right)/ 2);
    let lValue = divide(nums, left, mid);
    let rValue = divide(nums, mid+1, right);
    let leftSum = 0;
    let rightSum = 0;
    let maxLeft = Number.MIN_SAFE_INTEGER;
    let maxRight = Number.MIN_SAFE_INTEGER;
    for(let i = mid; i >= left; i --){
        leftSum += nums[i];
        maxLeft = Math.max(maxLeft, leftSum);
    }
    for(let i = mid+1; i <= right; i ++){
        rightSum += nums[i];
        maxRight = Math.max(maxRight, rightSum);
    }
    return Math.max(maxLeft, maxRight, maxLeft+maxRight, lValue, rValue);
}

var maxSubArray = function(nums) {
    let len = nums.length;
    return divide(nums, 0, len-1);
};

maxSubArray([-1,-2,-3,0]);