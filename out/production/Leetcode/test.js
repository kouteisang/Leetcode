var characterReplacement = function(s, k) {
    let chs = [...s];
    let len = chs.length;
    let left = 0;
    let right = 0;
    let count = new Array(26).fill(0);
    let ans = 0;
    while(right < len){
        let chNum = chs[right].charCodeAt() - 'A'.charCodeAt();
        count[chNum] ++;
        let sum = right - left + 1;
        let maxCount = Math.max(...count);
        while(sum - maxCount > k){
            count[chs[left].charCodeAt() - 'A'.charCodeAt()] --;
            left ++;
            maxCount = Math.max(...count);
            sum = right - left + 1;
        }
        ans = Math.max(ans, right - left + 1);
        right ++;
    }
    return ans;
};

characterReplacement("AABABBA", 1);