/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */

const mutation = ['A', 'G', 'C', 'T'];
var minMutation = function(start, end, bank) {
    if(bank.indexOf(end) < 0) return -1;
    let cStart = [...start];
    let cEnd = [...end];
    let queue = [{gene:start, cnt:0}];
    cnt = 0;
    while(queue.length > 0){
        let top = queue.shift();
        let gene = top.gene;
        let cnt = top.cnt;
        if(gene == end){
            return cnt;
        }
        let temp = [...gene];
        let len = temp.length;
        for(let i = 0; i < len; i ++){
            let origin = temp[i];
            for(let j = 0; j < 4; j ++){
                if(origin != mutation[j]){
                    temp[i] = mutation[j];
                    if(bank.indexOf(temp.join("")) > -1){
                        queue.push({cnt:cnt+1, gene:temp.join("")});
                    }
                }
            }
            temp[i] = origin;
        }

    }
    return -1;
};