var isValidSerialization = function(preorder) {
    let stack = [];
    let chs = preorder.split(",");
    let len = chs.length;
    for(let i = 0; i < len; i ++){
        if(!isNaN(parseInt(chs[i]))){
            stack.push(parseInt(chs[i]));
        }else if(chs[i] === '#'){
            stack.push('#');
            while(stack.length>=3){
                let lenStack = stack.length;
                if(stack[lenStack-1] === '#' && stack[lenStack-2] === '#' && !isNaN(stack[lenStack-3])){
                    stack.pop();
                    stack.pop();
                    stack.pop();
                    stack.push('#');
                }else{
                    break;
                }
            }
        }
    }
    return stack.length == 1 && stack[0] == '#';
};

isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#");
