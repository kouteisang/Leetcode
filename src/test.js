/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let len = s.length;
    let chs = [...s]
    let sum = new Array(len).fill(0);
    sum[0] = parseInt(chs[0]);
    for(let i = 1; i < len; i ++){
        sum[i] = sum[i-1] + parseInt(chs[i]);
    }
    ans = len - sum[len-1];
    for(let i = 1; i < len; i ++){
        let temp = sum[i-1];
        temp += (len - i) - sum[len-1] - sum[i-1];
        ans = Math.min(ans, temp);
    }
    return ans;
};

minFlipsMonoIncr("00110");