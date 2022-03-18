var originalDigits = function(s) {
    let chs = [...s];
    let cnt = new Array(26).fill(0);
    let len = chs.length;
    for(let i = 0; i < len; i ++){
        cnt[chs[i].charCodeAt()-'a'.charCodeAt()] ++;
    }
    let ans = [];
    //0
    while(cnt['z'.charCodeAt()-'a'.charCodeAt()] > 0){
        cnt['z'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['e'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['r'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['o'.charCodeAt()-'a'.charCodeAt()] --;
        ans.push(0);
    }
    //8
    while(cnt['g'.charCodeAt()-'a'.charCodeAt()] > 0){
        cnt['e'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['i'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['g'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['h'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['t'.charCodeAt()-'a'.charCodeAt()] --;
        ans.push(8);
    }
    //6
    while(cnt['x'.charCodeAt()-'a'.charCodeAt()] > 0){
        cnt['s'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['i'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['x'.charCodeAt()-'a'.charCodeAt()] --;
        ans.push(6);
    }
    //4
    while(cnt['u'.charCodeAt()-'a'.charCodeAt()] > 0){
        cnt['f'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['o'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['u'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['r'.charCodeAt()-'a'.charCodeAt()] --;
        ans.push(4);
    }
    //2
    while(cnt['w'.charCodeAt()-'a'.charCodeAt()] > 0){
        cnt['t'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['w'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['o'.charCodeAt()-'a'.charCodeAt()] --;
        ans.push(2);
    }
    //3
    while(cnt['t'.charCodeAt()-'a'.charCodeAt()] > 0){
        cnt['t'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['h'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['r'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['e'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['e'.charCodeAt()-'a'.charCodeAt()] --;
        ans.push(3);
    }
    //7
    while(cnt['s'.charCodeAt()-'a'.charCodeAt()] > 0){
        cnt['s'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['e'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['v'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['e'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['n'.charCodeAt()-'a'.charCodeAt()] --;
        ans.push(7);
    }
    //5
    while(cnt['v'.charCodeAt()-'a'.charCodeAt()] > 0){
        cnt['f'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['i'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['v'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['e'.charCodeAt()-'a'.charCodeAt()] --;
        ans.push(5);
    }
    //1
    while(cnt['o'.charCodeAt()-'a'.charCodeAt()] > 0){
        cnt['o'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['n'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['e'.charCodeAt()-'a'.charCodeAt()] --;
        ans.push(1);
    }
    //9
    while(cnt['e'.charCodeAt()-'a'.charCodeAt()] > 0){
        cnt['n'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['i'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['n'.charCodeAt()-'a'.charCodeAt()] --;
        cnt['e'.charCodeAt()-'a'.charCodeAt()] --;
        ans.push(1);
    }
    return ans.sort().join("");
};
originalDigits("nnei")
