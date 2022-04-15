var maxSubarraySumCircular = function(nums) {
    let len = nums.length;
    let sum = 0;
    let minSum = 0;
    let max = nums[0];
    let min = nums[0];
    let total = 0;
    for(let i = 0; i < len; i ++){
        sum += nums[i];
        minSum += nums[i];
        if(sum < nums[i]){
            sum = nums[i];
        }
        if(minSum > nums[i]){
            minSum = nums[i];
        }
        max = Math.max(max, sum);
        min = Math.min(min, minSum);
        total += nums[i];
    }
    return Math.max(total-min, max);

};

maxSubarraySumCircular([-5,-2,-2,-3, -1, -99]);
