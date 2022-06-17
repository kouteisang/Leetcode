/**
 * Initialize your data structure here.
 * @param {number} size
 */
let num;
var MovingAverage = function(size) {
    this.size = size;
    num = 0;
    this.list = [];
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    const {size, list} = this;
    num ++;
    let ans = 0;
    if(num > size){
        num = size;
        list.unshift();
        list.push(val);
        ans = 0;
        list.forEach((val, index, list)=>{
            ans += val;
        }, 0)
        ans = ans/num;
    }else{
        list.push(val);
        list.forEach((val, index, list)=>{
            ans += val;
        }, 0)
        ans = ans/num;
    }
    this.list = list;
    return ans;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

let move = new MovingAverage(3);
move.next(1);
move.next(10);
move.next(3);
move.next(5);