var removeKdigits = function(num, k) {
    let chs = [...num];
    if(k >= chs.length) return "0";
    let stk = [];
    let len = chs.length;
    stk.push(chs[0])
    for(let i = 1; i < len; i ++){
        while(k>0 && stk.length > 0 && chs[i].charCodeAt() < stk[stk.length-1].charCodeAt()){
            k --;
            stk.pop();
            if(k == 0){
                break;
            }
        }
        stk.push(chs[i]);
    }
    while(stk.length > 0 && stk[0] == "0"){
        stk.shift();
    }
    if(stk.length == 0) return "0";
    if(k > 0){
        if(k < stk.length){
            stk = stk.slice(0, stk.length-k);
        }else {
            return "0";
        }
    }
    return stk.length == 0 ? "0" : stk.join("");
};

removeKdigits("112", 1);