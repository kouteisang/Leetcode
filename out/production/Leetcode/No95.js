/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

const buildTree = (left, right) => {
    let list = [];
    if(left > right){
        list.push(null);
        return list;
    }
    for(let i = left; i <= right; i ++){
        let leftTree = buildTree(left, i-1);
        let rightTree = buildTree(i+1, right);
        for(let lt of leftTree){
            for(let rt of rightTree){
                let tree = new TreeNode(i);
                tree.left = lt;
                tree.right = rt;
                list.push(tree);
            }
        }
    }
    return list;
}


var generateTrees = function(n) {
    return buildTree(1, n);
};
