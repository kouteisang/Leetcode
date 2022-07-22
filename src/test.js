/**
 * @param {number} n
 * @return {number[]}
 */
let number = ['0','1','2','3','4','5','6','7','8','9']
let ans = [];


const dfs = (pos, n, t) => {
    if(pos === n){
        let temp = [...t];
        while (temp[0] === '0'){
            temp.shift();
        }
        if(temp.length > 0){
            ans.push(parseInt(temp.join("")));
        }
        return;
    }
    for(let i = 0; i < 10; i ++){
        t.push(number[i]);
        dfs(pos+1, n, t);
        t.pop();
    }
}

var printNumbers = function(n) {
    ans = [];
    dfs(0, n, []);
    return ans;
};
printNumbers(3)
console.log(ans)