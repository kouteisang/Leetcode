const check = (secondStart, secondEnd, nums) => {
    if(secondEnd == nums.length) return false;
    // if(secondEnd + 1 < nums.length && nums[secondEnd+1] == '0') return false;

    let firstNumber = 0;
    let secondNumber = 0;
    let third = 0;

    for(let i = 0; i <= secondStart-1; i ++){
        firstNumber = firstNumber * 10 +  (nums[i].charCodeAt() - '0'.charCodeAt());
    }

    for(let i = secondStart; i <= secondEnd; i ++){
        secondNumber = secondNumber * 10 +  (nums[i].charCodeAt() - '0'.charCodeAt());
    }
    let thirdNumber = firstNumber + secondNumber;
    let st = thirdNumber.toString().length;

    if(secondEnd + st < nums.length){
        for(let i = secondEnd + 1; i <= secondEnd + st; i ++){
            third = third*10 + nums[i].charCodeAt() - '0'.charCodeAt();
        }
    }
    if(third != thirdNumber) return false;
    if(third == thirdNumber && secondEnd + st == nums.length-1) return true;
    secondEnd = secondEnd + st;
    while(true){
        third = 0;
        firstNumber = secondNumber;
        secondNumber = thirdNumber;
        thirdNumber = firstNumber + secondNumber
        st = thirdNumber.toString().length;
        if(secondEnd + st < nums.length){
            for(let i = secondEnd + 1; i <= secondEnd + st; i ++){
                third = third*10 + nums[i].charCodeAt() - '0'.charCodeAt();
            }
        }
        if(third != thirdNumber) return false;
        if(third == thirdNumber && secondEnd + st == nums.length-1) return true;
        secondEnd = secondEnd + st;
    }
}




var isAdditiveNumber = function(num) {
    let nums = [...num];
    let len = nums.length;
    let flag = false;

    for(let i = 1; i < len; i ++){
        if(nums[i] == '0'){
            flag = check(i, i, nums);
            if(flag) return flag;
            continue;
        }
        for(let j = i; j < len; j ++){
            if(nums[0]== '0'){
                flag = check(1, j, nums);
            }else {
                flag = check(i, j, nums);
            }
            if(flag) return flag;
        }
    }
    return flag;
};

isAdditiveNumber("0235813")