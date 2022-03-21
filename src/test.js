let res = [];
const dfs = (pos, wordDict, dp, ans, s) => {
    let len = s.length;
    if(pos == len + 1){
        if(dp[len] == true){
            res.push(ans.join(" "));
        }
        return ;
    }
    let wordDictLen = wordDict.length;
    for(let i = pos; i < len; i ++){
        for(let j = 0; j < wordDictLen; j ++){
            if(i - wordDict[j].length >= 0){
                if(s.substring(i-wordDict[j].length, i) == wordDict[j] && dp[i-wordDict[j].length]){
                    dp[i] = true;
                    ans.push(wordDict[j]);
                    dfs(i+1, wordDict, dp, ans, s);
                    dp[i] = false;
                    ans.pop();
                    dp[i] = false;
                }
            }
        }
    }
}

var wordBreak = function(s, wordDict) {
    res = []
    let chs = [...s];
    let dp = new Array(chs.length + 1).fill(false);
    dp[0] = true;
    dfs(0, wordDict, dp, [], s);
    return res;
};
wordBreak("catsanddog", ["cat","cats","and","sand","dog"]);
