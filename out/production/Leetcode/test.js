class Node{
    val
    neighbors
    constructor(val, neighbors) {
        this.val = val;
        this.neighbors = neighbors;
    }
}


one = new Node(1,[])
two = new Node(2, [])
three = new Node(3, [])
four = new Node(4, [])

one.neighbors.push(three)
one.neighbors.push(four)

two.neighbors.push(three)
two.neighbors.push(four)

three.neighbors.push(one)
three.neighbors.push(two)

four.neighbors.push(one)
four.neighbors.push(two)

var cloneGraph = function(node) {
    if(node == null) return null;
    let queue = [];
    queue.push(node);
    let map = new Map();
    map.set(node, new Node(node.val, []));
    while(queue.length > 0){
        let top = queue.shift();
        let neighbors = top.neighbors;
        for(let i = 0; i < neighbors.length; i ++){
            if(!map.has(neighbors[i])){
                queue.push(neighbors[i]);
                map.set(neighbors[i], new Node(neighbors[i].val, []));
            }
            top.neighbors.push(map.get(neighbors[i]));
        }
    }
    return map.get(node);
};

cloneGraph(one);