var searchInsert = function(nums, target) {
    if(nums[nums.length-1] < target) return nums.length;
    let left = 0;
    let right = nums.length-1;
    let ans = 0;
    while(left < right){
        let mid = left + ((right-left) >> 1);
        if(nums[mid] >= target){
            ans = mid;
            right = mid-1;
        }else {
            left = mid + 1;
        }
    }
    return ans;
};

searchInsert([1, 3, 5, 6], 0)