const findBigger = (array, num) => {
    let left = 0;
    let right = num.length-1;
    let len = num.length -1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(array[mid] < num){
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return array[right];
}

let array = [1, 2, 3, 4];
let ans = findBigger(array, 2);
console.log(ans)