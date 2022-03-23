/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
let ans = []
const dfs = (pos, set, s, temp)=>{
    if(pos == s.length){
        ans.push(temp.join(" "));
    }
    let len = s.length;
    for(let i = pos; i < len; i ++){
        let substring = s.substring(pos, i+1);
        if(set.has(substring)){
            temp.push(substring);
            dfs(i+1, set, s, temp);
            temp.pop();
        }
    }

}

var wordBreak = function(s, wordDict) {
    ans = []
    let set = new Set([...wordDict]);
    let temp = []
    dfs(0, set, s, temp);
    return ans;
};