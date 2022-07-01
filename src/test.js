var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let map = new Map();
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i > k) {
            map.delete(nums[i - k - 1]);
        }
        if (i > 0) {
            for (let [key, value] of map) {
                if (Math.abs(key - nums[i]) <= t && Math.abs(value - i) <= k) {
                    return true;
                }
            }
        }
        map.set(nums[i], i);
    }
    return false;
}

containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2);