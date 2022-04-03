/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 最小堆 implement by Cheng
 */
let map = null;

const buildMinHeap = (arr, n, i) => {
    while(true){
        let flag = false;
        let index = i;
        let left = i*2+1;
        let right = i*2+2;
        if(left < n && map.get(arr[left]) < map.get(arr[index])){
            index = left;
        }
        if(right < n && map.get(arr[right]) < map.get(arr[index])){
            index = right;
        }
        if(index != i){
            flag = true;
            let t = arr[index]
            arr[index] = arr[i];
            arr[i] = t;
            i = index;
        }
        if(!flag) break;
    }
}

var topKFrequent = function(nums, k) {
    map = new Map();
    for(let num of nums){
        map.has(num) ? map.set(num, map.get(num)+1) : map.set(num, 1);
    }
    let keys = Array.from(new Set([...map.keys()]))
    let kk = []
    let len = keys.length;
    for(let i = 0; i < k; i ++){
        kk.push(keys[i]);
    }
    for(let i = Math.floor(k/2-1); i >= 0; i --){
        buildMinHeap(kk, k, i);
    }
    console.log(kk)
    for(let i = k; i < len; i ++){
        if(map.get(keys[i]) > map.get(kk[0])){
            kk[0] = keys[i];
            buildMinHeap(kk, k, 0);
        }
    }
    return kk;
};