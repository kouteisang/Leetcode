let nums = [1,2,3,3 ,4,5];

let count = new Map();
let map = new Map();

for(let num of nums){
    count.has(num) ? count.set(num, count.get(num)+1) : count.set(num, 1);
}

for(let num of nums){
    if(count.get(num) <= 0)
        continue;
    if(map.has(num-1)){
        count.set(num, count.get(num)-1);
        let cnt = map.has(num-1) ? map.get(num-1) : 0;
        map.set(num-1, cnt-1);
        if(map.get(num-1) == 0){
            map.delete(num-1);
        }
        cnt = map.has(num) ? map.get(num) : 0;
        map.set(num, cnt+1);
    }else{
        if(!count.has(num+1) || !count.has(num+2)) console.log(false)
        if(count.get(num+1) == 0 || count.get(num+2) == 0) console.log(false);
        count.set(num, count.get(num)-1);
        count.set(num+1, count.get(num+1)-1);
        count.set(num+2, count.get(num+2)-1);
        let cnt = map.has(num+2) ? map.get(num+2) : 0;
        map.set(num+2, cnt+1);
    }
}

