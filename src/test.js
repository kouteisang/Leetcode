/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const dfs = (poss, posp, s, p) => {
    if(poss === s.length){
        if(posp === p.length){
            return true;
        }
    }
    if(posp + 1 <= p.length - 1 && p[posp + 1] === '*'){
        if(poss <= s.length-1 && (s[poss] === p[posp] || p[posp] === '.')) return (dfs(poss + 1, posp, s, p) || dfs(poss+1, posp + 2, s, p));
        return dfs(poss, posp+2, s, p);
    }else{
        if(poss <= s.length-1 && posp <= p.length - 1 && (s[poss] === p[posp] || p[posp] === '.')) return dfs(poss + 1, posp+1, s, p);
        if(poss <= s.length-1 && posp <= p.length - 1 && s[poss] !== p[posp]) return false;
        if(poss <= s.length-1 && posp <= p.length - 1 && '.' !== p[posp]) return false;
    }

}

var isMatch = function(s, p) {
    return dfs(0, 0, s, p);
};
isMatch("bbbba", ".*a*a");