/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let len = temperatures.length;
    let stack = [];
    let ans = [];
    for(let i = 0; i < len; i ++){
        if(stack.length >= 1){
            let cnt = i-1;
            while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]){
                ans[stack[stack.length-1]] = i - stack[stack.length-1];
                cnt --;
                stack.pop();
            }
        }
        stack.push(i);
        ans.push(0);
    }
    return ans;
};


dailyTemperatures([73,74,75,71,69,72,76,73]);