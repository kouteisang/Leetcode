/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    let len = nums.length;

    let dpMax = new Array(len).fill(0);
    let dpMin = new Array(len).fill(0);
    dpMax[0] = dpMin[0] = nums[0];

    let lenMin = new Array(len).fill(0);
    let lenMax = new Array(len).fill(0);
    lenMin[0] = lenMax[0] = 1;
    let ansLen = (nums[0] > 0 ? 1 : 0)
    for(let i = 1; i < len; i ++){
        if(nums[i] > 0){
            lenMax[i] = 1;
            dpMax[i] = nums[i];
        }
        if(dpMax[i-1]*nums[i] > 0){
            lenMax[i] = Math.max(lenMax[i-1] + 1, lenMax[i]);
            dpMax[i] = dpMax[i-1] * nums[i];
        }
        if(dpMin[i-1] * nums[i] > 0){
            lenMax[i] = Math.max(lenMin[i-1] + 1, lenMax[i]);
            dpMax[i] = dpMin[i-1] * nums[i];
        }

        if(nums[i] < 0){
            dpMin[i] = nums[i];
            lenMin[i] = 1;
        }
        if(dpMin[i-1] * nums[i] < 0){
            dpMin[i] = dpMin[i-1] * nums[i];
            lenMin[i] = Math.max(lenMin[i-1] + 1, lenMin[i]);
        }
        if(dpMax[i-1] * nums[i] < 0){
            dpMin[i] = dpMax[i-1] * nums[i];
            lenMin[i] = Math.max(lenMax[i-1] + 1, lenMin[i]);
        }
        if(dpMax[i] > 0){
            ansLen = Math.max(lenMax[i], ansLen);
        }
        if(dpMin[i] > 0){
            ansLen = Math.max(lenMin[i], ansLen);
        }
    }
    return ansLen;
};
