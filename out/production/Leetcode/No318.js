var maxProduct = function(words) {
    let len = words.length;
    let work = new Array(len).fill(0);
    for(let i = 0; i <  len; i ++){
        let word = words[i];
        let lenWord = word.length;
        let number = 0;
        for(let j = 0; j < lenWord; j ++){
            number |= 1 << (word[j].charCodeAt() - 'a'.charCodeAt());
        }
        work[i] = number;
    }
    let ans = 0;
    for(let i = 0; i < len; i ++){
        for(let j = i+1; j < len; j ++){
            //注意优先级
            if((work[i] & work[j]) === 0){
                ans = Math.max(words[i].length * words[j].length, ans);
            }
        }
    }
    return ans;
};

let words = ["abcw","baz","foo","bar","xtfn","abcdef"];
maxProduct(words)

