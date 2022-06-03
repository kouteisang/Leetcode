/**
 * @param {number[][]} grid
 * @return {number}
 */

let parents;
let rank;
let ans = 0;

const find = (x) => {
    if(parents[x] == x) return parents[x];
    return parents[x] = find(parents[x])
}

const union = (i, j, x, y, n, m)=>{
    let pone = find(i*m+j);
    let ptwo = find(x*m+y);
    if(pone == ptwo){
        return ;
    }else if(pone < ptwo){
        parents[pone] = ptwo;
        rank[ptwo] += rank[pone];
        ans = Math.max(rank[ptwo], ans);
    }else{
        parents[ptwo] = pone;
        rank[pone] += rank[ptwo];
        ans = Math.max(rank[pone], ans);
    }
}

var maxAreaOfIsland = function(grid) {
    let n = grid.length;
    let m = grid[0].length;

    parents = new Array(n*m+10).fill(0);
    for(let i = 0; i < n*m+10; i ++){
        parents[i] = i;
    }
    rank = new Array(n*m+10).fill(1);
    ans = 0;

    for(let i = 0; i < n; i ++){
        for(let j = 0; j < m; j ++){
            let num = i*m+j;
            if(grid[i][j] != 1) continue ;
            if(i-1 >= 0 && grid[i-1][j] == 1){
                union(i, j, i-1, j, n, m);
            }
            if(i+1 < n && grid[i+1][j] == 1){
                union(i, j, i+1, j, n, m);
            }
            if(j-1 >= 0 && grid[i][j-1] == 1){
                union(i, j, i, j-1, n, m);
            }
            if(j+1 < m && grid[i][j+1] == 1){
                union(i, j, i, j+1, n, m);
            }
        }
    }
    return ans;
};


let grid =
    [[0, 1, 1, 0],
    [0 ,1 ,0, 0],
    [0,0,0,0]]

let res = maxAreaOfIsland(grid);
console.log(res)