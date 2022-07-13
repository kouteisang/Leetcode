
const root = {
    data: 1,
    children: [
        { data: 2 },
        { data: 3 },
        {
            data: 4,
            children: [{ data: 5 }, { data: 6 }, { data: 7 }]
        }
    ]
}

let ans = [];


const levelOrder = (root) => {
    let queue = [];
    queue.push([root]);

    while (queue.length > 0){
        let tops = queue.shift();
        let temp = []
        for(let top of tops){
            if(top["data"] !== undefined){
                temp.push(top["data"]);
            }
            if(top["children"] !== undefined){
                queue.push(top["children"]);
            }
        }
        ans.push(temp);
    }
}




//层序遍历
// [[1], [2, 3, 4], [5, 6, 7]]
levelOrder(root);
console.log(ans);