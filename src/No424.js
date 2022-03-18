var characterReplacement = function(s, k) {
    let chs = [...s];
    let left = 0;
    let right = 0;
    let len = chs.length;
    let cnt = new Array(26).fill(0);
    let ans = 0;
    while(right < len){
        cnt[chs[right].charCodeAt()-'A'.charCodeAt()] ++;
        let temp = [];
        for(let i = 0; i < 26; i ++){
            if(cnt[i] > 0){
                temp.push(cnt[i]);
            }
        }
        temp.sort((a, b)=>{
            return a-b;
        });
        let tempLen = temp.length;
        let number = 0;
        for(let i = 0; i < tempLen-1; i ++){
            number += temp[i];
        }
        if(number > k){
            cnt[chs[left].charCodeAt()-'A'.charCodeAt()] --;
            left ++;
        }
        ans = Math.max(right - left + 1, ans);
        right ++;
    }
    return ans;
};
console.log(characterReplacement("BAAA", 0));