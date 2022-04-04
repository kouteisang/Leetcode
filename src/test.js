var canJump = function(nums) {
    let len = nums.length;
    let pos = 0;
    while(pos < len){
        if(nums[pos] == 0) return false;
        let step = nums[pos];
        let route = 0;
        let tPos = pos;
        for(let i = 1; i <= step; i ++){
            if(i+pos >= len-1) return true;
            if(i + nums[i+pos] > route){
                route = i + nums[i];
                tPos = i;
                route = i + nums[i+pos];
            }
        }
        pos += tPos;
        if(pos >= len-1) return true;
    }
    return true;
};

canJump([2,3,1,1,4])