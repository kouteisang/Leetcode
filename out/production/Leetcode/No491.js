/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let res = []
const dfs = (pos, nums, t, last) => {

    if(pos == nums.length){
        if(t.length < 2){
            return ;
        }
        res.push([...t]);
        return;
    }
    if(nums[pos] >= last){
        t.push(nums[pos]);
        dfs(pos+1, nums, t, nums[pos]);
        t.pop();
    }
    if(nums[pos] != last){
        dfs(pos+1, nums, t, last);
    }

}

var findSubsequences = function(nums) {
    res = []
    dfs(0, nums,[], Number.MIN_SAFE_INTEGER);
    return res;
};
findSubsequences([1,2,2])