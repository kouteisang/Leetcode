var maxSubarraySumCircular = function(nums) {
    let len = nums.length;
    let sum = nums[0];
    let ans = nums[0];
    for(let i = 1; i < len; i ++){
        sum += nums[i];
        if(sum < nums[i]){
            sum = nums[i];
        }
        ans = Math.max(ans, sum);
    }
    let right = new Array(len).fill(0);
    right[len-1] = nums[len-1];
    let rightSum = nums[len-1];
    for(let i = len-2; i >= 0; i --){
        rightSum += nums[i];
        right[i] = Math.max(rightSum, right[i+1]);
    }
    let leftSum = 0;
    for(let i = 0; i < len; i ++){
        leftSum += nums[i];
        if(i+2 < len){
            ans = Math.max(leftSum + right[i+2], ans);
        }
    }
    return ans;
};

maxSubarraySumCircular([-2,4,-5,4,-5,9,4])