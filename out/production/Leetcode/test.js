let s = ["h","e","l","l","o"];
let chs = [...s];
let left = 0;
let right = chs.length-1;
while(left < right){
    let t = chs[left];
    chs[left] = chs[right];
    chs[right] = t;
    left ++;
    right --;
}