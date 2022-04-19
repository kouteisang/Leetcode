/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let chs = [...s];
    let len = chs.length;
    let wordLen = wordDict.length;
    let dp = new Array(len).fill(false);
    for(let i = 0; i < len; i ++){
        for(let j = 0; j < wordLen; j ++){
            if((i+1) - wordDict[j].length >= 0){

                if((i+1) - wordDict[j].length == 0){
                    if(s.substring(0, wordDict[j].length) == wordDict[j]){
                        dp[i] = true;
                        break;
                    }
                }else if((i+1) - wordDict[j].length > 0){
                    let ss = s.substring(i+1-wordDict[j].length, i+1)
                    console.log(ss)
                    dp[i] = dp[i-wordDict[j].length] && (ss == wordDict[j]);
                    if(dp[i]) break;
                }

            }
        }
    }
    return dp[len-1];
};
wordBreak("applepenapple", ["apple","pen"]);