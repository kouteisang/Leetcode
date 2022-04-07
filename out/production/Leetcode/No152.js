var maxProduct = function(nums) {
    let len = nums.length;
    let dpMax = new Array(len).fill(0);
    let dpMin = new Array(len).fill(0);
    dpMax[0] = nums[0];
    dpMin[0] = nums[0];
    let ans = Number.MIN_SAFE_INTEGER;
    for(let i = 1; i < len; i ++){
        dpMax[i] = Math.max(nums[i], dpMax[i-1]*nums[i], dpMin[i-1]*nums[i]);
        dpMin[i] = Math.min(nums[i], dpMax[i-1]*nums[i], dpMin[i-1]*nums[i]);
        ans = Math.max(dpMax[i], dpMin[i], ans);
    }
    return ans;
};
maxProduct([0, 1, -2, 3, -4]);