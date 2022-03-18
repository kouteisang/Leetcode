var longestSubstring = function(s, k) {
    let chs = [...s];
    let len = chs.length;
    let cnt = new Array(26).fill(0);
    let ans = 0;
    for(let i = 1; i <= 26; i ++){
        let left = 0;
        let right = 0;
        let cnt = new Array(26).fill(0);
        let type = 0;
        while(right < len){
            let ch = chs[right].charCodeAt() - 'a'.charCodeAt();
            cnt[ch] ++;
            if(cnt[ch] == 1) type++;
            if(type == i){
                let flag = true;
                for(let p = 0; p <= 25; p ++){
                    if(cnt[p] > 0 && cnt[p] < k){
                        flag = false;
                        break;
                    }
                }
                if(flag){
                    ans = Math.max(ans, right-left+1);
                }
            }else{
                while(type > i && left <= right){
                    let chRemove = chs[left].charCodeAt() - 'a'.charCodeAt();
                    cnt[chRemove] --;
                    if(cnt[chRemove] == 0){
                        type --;
                    }
                    left ++;
                }
            }
            right ++;
        }
    }
    return ans;

};
longestSubstring("bbaaacbd",3);
