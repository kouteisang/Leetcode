/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let queue = [];
    queue.push({arr:[0,0,0,0], step:0});
    let vis = new Array(10100).fill(false);

    while(queue.length > 0){
        let head = queue.shift();
        let top = head.arr;
        let step = head.step;
        if(top.join("") == target){
            return step;
        }
        let num = top[0]*1 + top[1]*10 + top[2]*100 + top[3]*1000;
        vis[num] = true;
        let x = top[0];
        let y = top[1];
        let z = top[2];
        let p = top[3];

        x = top[0]
        y = top[1]
        z = top[2]
        p = top[3]
        x ++;
        if(x == 10){
            x = 0;
        }
        num = x*1 + y*10 + z*100 + p*1000;
        if(!vis[num] && deadends.indexOf([x,y,z,p].join("")) == -1){
            vis[num] = true;
            queue.push({arr:[x, y, z, p], step:step+1});
        }

        x = top[0]
        y = top[1]
        z = top[2]
        p = top[3]
        x --;
        if(x == -1) x = 9;
        num = x*1 + y*10 + z*100 + p*1000;
        if(!vis[num] && deadends.indexOf([x,y,z,p].join("")) == -1){
            vis[num] = true;
            queue.push({arr:[x, y, z, p], step:step+1});
        }

        x = top[0]
        y = top[1]
        z = top[2]
        p = top[3]

        y ++;
        if(y == 10) y = 0;
        num = x*1 + y*10 + z*100 + p*1000;
        if(!vis[num] && deadends.indexOf([x,y,z,p].join("")) == -1){
            vis[num] = true;
            queue.push({arr:[x, y, z, p], step:step+1});
        }

        x = top[0]
        y = top[1]
        z = top[2]
        p = top[3]
        y --;
        if(y == -1) y = 9;
        num = x*1 + y*10 + z*100 + p*1000;
        if(!vis[num] && deadends.indexOf([x,y,z,p].join("")) == -1){
            vis[num] = true;
            queue.push({arr:[x, y, z, p], step:step+1});
        }

        x = top[0]
        y = top[1]
        z = top[2]
        p = top[3]
        z ++;
        if(z == 10) z = 0;
        num = x*1 + y*10 + z*100 + p*1000;
        if(!vis[num] && deadends.indexOf([x,y,z,p].join("")) == -1){
            vis[num] = true;
            queue.push({arr:[x, y, z, p], step:step+1});
        }

        x = top[0]
        y = top[1]
        z = top[2]
        p = top[3]
        z --;
        if(z == -1) z = 9;
        num = x*1 + y*10 + z*100 + p*1000;
        if(!vis[num] && deadends.indexOf([x,y,z,p].join("")) == -1){
            vis[num] = true;
            queue.push({arr:[x, y, z, p], step:step+1});
        }

        x = top[0]
        y = top[1]
        z = top[2]
        p = top[3]
        p ++;
        if(p == 10) p = 0;
        num = x*1 + y*10 + z*100 + p*1000;
        if(!vis[num] && deadends.indexOf([x,y,z,p].join("")) == -1){
            vis[num] = true;
            queue.push({arr:[x, y, z, p], step:step+1});
        }

        x = top[0]
        y = top[1]
        z = top[2]
        p = top[3]
        p --;
        if(p == -1) p = 9;
        num = x*1 + y*10 + z*100 + p*1000;
        if(!vis[num] && deadends.indexOf([x,y,z,p].join("")) == -1){
            vis[num] = true;
            queue.push({arr:[x, y, z, p], step:step+1});
        }

    }
    return -1;
};

let ans = openLock(["0201","0101","0102","1212","2002"],"0202");
console.log(ans)