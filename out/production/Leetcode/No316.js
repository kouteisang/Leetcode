// 最小栈
var removeDuplicateLetters = function(s) {
    let chs = [...s];
    let len = chs.length;
    let stack = [];
    let count = new Array(26).fill(0);

    for(let i = 0; i < len; i ++){
        count[chs[i].charCodeAt() - 'a'.charCodeAt()] ++;
    }

    for(let i = 0; i < len; i ++){
        count[chs[i].charCodeAt()-'a'.charCodeAt()] --;
        if(stack.indexOf(chs[i]) > -1)
            continue;
        while(stack.length > 0){
            let top = stack[stack.length-1];
            if(count[top.charCodeAt()-'a'.charCodeAt()] >= 1 && chs[i] <= top){
                stack.pop();
            }else{
                break;
            }
        }
        if(stack.indexOf(chs[i]) < 0){
            stack.push(chs[i]);
        }
    }

    return stack.join("");

};

let s = "abacb";
removeDuplicateLetters(s);