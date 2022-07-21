/**
 * @param {string} s
 * @return {boolean}
 */

const checkFront = (s) => {
    let len = s.length;
    let opt = 0;
    let cntPoint = 0;
    let number = 0;
    for(let i = 0; i < len; i ++){
        if(s[i] === '.'){
            cntPoint ++;
            continue;
        }
        if(s[i] === '+' || s[i] === '-'){
            opt ++;
            continue;
        }
        if(s[i] >='0' && s[i] <='9'){
            number ++;
        }
    }
    if(opt >= 2) return false;
    if(opt === 1 && s[0] !=='+' && s[0] !== '-') return false;
    if(opt === 1 && s.length === 1) return false;
    if(number === 0 && cntPoint != 0) return false;
    return true;
}

const checkAfter = (s) => {
    let len = s.length;
    let opt = 0;
    let cntPoint = 0;
    for(let i = 0; i < len; i ++){
        if(s[i] === '.'){
            cntPoint ++;
            continue;
        }
        if(s[i] === '+' || s[i] === '-'){
            opt ++;
            continue;
        }
    }
    if(cntPoint > 0) return false;
    if(opt === 1 && s.length === 1) return false;
    console.log(s[0])
    if(opt === 1 && s[0] !=='+' && s[0] !== '-') return false;
    return true;
}


var isNumber = function(s) {
    let cntE = 0;
    let cntPoint = 0;
    let index = 0;
    let cntOpt = 0;
    s = s.trim();
    if(s === "") return false;
    let number = 0;
    let len = s.length;
    for(let i = 0; i < len; i ++){
        if(s[i] === 'E' || s[i] === 'e'){
            cntE ++;
            index = i;
            continue;
        }
        if(s[i] === '.'){
            cntPoint ++;
            continue;
        }
        if(s[i] >= '0' && s[i] <= '9'){
            number ++;
            continue;
        }
        if(s[i] === '+' || s[i] === '-'){
            cntOpt ++;
            continue;
        }
        return false;
    }
    if(cntE >= 2) return false;
    if(cntE === 1 && (index === 0 || index === s.length-1)) return false;
    if(cntPoint >= 2) return false;
    if(cntOpt >= 3) return false;

    if(cntE === 0){
        if(number===0 && cntPoint === 1 && s[s.length-1] === '.') return false;
        if(number===0 && cntPoint === 1 && s[0] === '.') return false;
        if(cntOpt >= 2) return false;
        if(s.length == 1 && cntOpt === 1) return false;
        if(cntOpt === 1  && s[0] !=='+' && s[0] !== '-') return false;
        return true;
    }

    if(cntE === 1){
        return checkFront(s.substring(0, index)) && checkAfter(s.substring(index + 1));
    }
};

let ans = isNumber(".e1")
console.log(ans)