
 function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */

let ans;
 const dfs = (root, targetSum, sum, map) => {
     if(root == null) return ;
     sum += root.val;
     if(sum == targetSum){
         ans ++;
     }
     if(map.has(sum-targetSum) ){
         console.log(map.has(sum-targetSum))
         ans += map.get(sum-targetSum);
         console.log(ans);
     }
     if(!map.has(sum)){
         map.set(sum, 1);
     }else{
         map.set(sum, map.get(sum)+1);
     }
     dfs(root.left, targetSum, sum, map);
     dfs(root.right, targetSum, sum, map);
 }




 var pathSum = function(root, targetSum) {
    ans = 0;
    dfs(root, targetSum, 0, new Map());
    return ans;
};

let one = new TreeNode(1);
let two = new TreeNode(-2);
let three = new TreeNode(-3)
let four = new TreeNode(1)
let five = new TreeNode(3);
let six = new TreeNode(-2);
let seven = new TreeNode(-1);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = six;
four.left = seven;


pathSum(one, 3);