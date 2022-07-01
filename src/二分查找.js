/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */

// 找大于等于
const findBigger = (array, num) => {
    let left = 0;
    let right = array.length-1;

    while(left < right){
        let mid = (left + right) >> 1;
        if(array[mid] >= num){
            right = mid;
        }else {
            left = mid + 1;
        }
    }
    if(array[right] < num) return undefined;
    else return array[right];
}

//找小于等于
const findSmaller = (array, num) => {
    let left = 0;
    let right = array.length-1;

    while(left < right){
        let mid = (left + right + 1) >> 1;
        if(array[mid] <= num){
            left = mid;
        }else {
            right = mid-1;
        }
    }
    if(array[left] > num) return undefined;
    else return array[left];
}
