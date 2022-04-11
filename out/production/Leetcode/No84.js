
var largestRectangleArea = function(heights) {
    let len = heights.length;
    let stack = [];
    let ans = 0;
    for(let i = 0; i < len; i ++){
        while(stack.length > 0 && heights[i] < heights[stack[stack.length-1]]){
            let index = stack.pop();
            if(stack.length == 0){
                ans = Math.max(ans, heights[index]*i);
            }else{
                ans = Math.max(ans, (i - stack[stack.length-1]-1)*heights[index]);
            }
        }
        stack.push(i);
    }
    while(stack.length > 0){
        let index = stack.pop();
        if(stack.length == 0){
            ans = Math.max(ans, heights[index]*len);
        }else{
            ans = Math.max(ans, (len-stack[stack.length-1]-1) * heights[index]);
        }
    }
    return ans;
};

console.log(largestRectangleArea([5,4,4,6,3,2,9,5,4,8,1,0,0,4,7,2]))