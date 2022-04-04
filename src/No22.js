let n = 3;
let ans = [];
let t0 = [""];
let t1 = ["()"];
ans.push(t0);
ans.push(t1);

for(let i = 2; i <= n; i ++){
    let temp = []
    for (let j = 0; j < i; j ++){
        let left = ans[j];
        let right = ans[i-j-1];
        for(let l of left){
            for(let r of right){
                let s = "(" + l + ")" + r;
                temp.push(s);
            }
        }
    }
    ans.push(temp);
}
console.log(ans[3])