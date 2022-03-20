/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let first = new Array(26).fill(0);
    let second = new Array(26).fill(0);
    let chs1 = [...s1];
    let chs2 = [...s2];
    let len1 = chs1.length;
    let len2 = chs2.length;
    for(let i = 0; i < len1; i ++){
        first[chs1[i].charCodeAt()-'a'.charCodeAt()] ++;
    }
    for(let i = 0; i < len2; i ++){
        second[chs2[i].charCodeAt()-'a'.charCodeAt()] ++;
    }
    if(first.join('') == second.join('')) return true;
    let right = 0;
    let left = 0;
    let temp = new Array(26).fill(0);
    while(right < len2){
        temp[chs2[right].charCodeAt()-'a'.charCodeAt()] ++;
        if(right - left + 1 > len1){
            temp[chs2[left].charCodeAt()-'a'.charCodeAt()] --;
            left ++;
        }
        if(right-left+1 == len1){
            if(first.join('') == temp.join('')) return true;
        }
        right ++;
    }
    return false;

};
checkInclusion("ab","eidbaooo");