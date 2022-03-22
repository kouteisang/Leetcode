let res = []

const dfs = (index, chs, wordDict, t, s) => {
    if(index == chs.length){
        res.push(t.join(" "));
        return ;
    }
    let len = chs.length;
    for(let i = index; i < len; i ++){
        for(let j = 0; j < wordDict.length; j ++){
            if(i + wordDict[j].length <= len){
                let sub = s.substring(i, i + wordDict[j].length);
                if(sub == wordDict[j]){
                    t.push(wordDict[j]);
                    dfs(i+wordDict[j].length, chs, wordDict, t, s);
                    t.pop();
                }
            }
        }
    }
}

var wordBreak = function(s, wordDict) {
    res = []
    let chs = [...s]
    let t = []
    dfs(0, chs, wordDict, t, s);
    return t;
};
