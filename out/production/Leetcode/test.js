function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
}

const dfs = (root) => {
    if(root == null) return ;
    if(root.left == null && root.right == null && root.val == 0){
        root = null;
        return ;
    }
    dfs(root.left);
    dfs(root.right);
}

var pruneTree = function(root) {
    // map = new Map();
    // dfs(root);
    // if(root.val == 0) return null;
    // dfs2(root);
    dfs(root);
    return root;
};

let one = new TreeNode(1);
let two = new TreeNode(0);
let three = new TreeNode(1);
let four = new TreeNode(0);
let five= new TreeNode(0);
let six=new TreeNode(0);
let seven=new TreeNode(1);

one.left = two;
one.right =three;
two.left= four;
two.right = five;
three.left = six;
three.right = seven;

pruneTree(one);