/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let chs = [...s];
    if(chs[0] == '0') return 0;
    let len = chs.length;
    let dp = new Array(len).fill(0);
    if(chs[0] != '0') dp[0] = 1;
    if(len >= 2){
        let num2 = (chs[0].charCodeAt()-'0'.charCodeAt()) * 10 + chs[1].charCodeAt()-'0'.charCodeAt();
        if(chs[0] !='0' && chs[1] !='0') dp[1] += 1;
        if(chs[0] !='0' && num2 >= 1 && num2 <= 26) dp[1] += 1;
        for(let i = 2; i < len; i ++){
            if(chs[i] != '0') dp[i] += dp[i-1];
            num2 = (chs[i-1].charCodeAt()-'0'.charCodeAt()) * 10 + chs[i].charCodeAt()-'0'.charCodeAt();
            if(chs[i-1] != '0' && num2 >= 1 && num2 <= 26) dp[i] += dp[i-2];
        }
    }
    return dp[len-1];
};