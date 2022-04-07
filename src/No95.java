import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

class TreeNode {
      int val;
      TreeNode left;
      TreeNode right;
      TreeNode() {}
      TreeNode(int val) { this.val = val; }
      TreeNode(int val, TreeNode left, TreeNode right) {
          this.val = val;
          this.left = left;
          this.right = right;
      }
 }


public class No95 {

    public static void main(String[] args) {
        System.out.println(generateTrees(3));
    }

    public static List<TreeNode> generateTrees(int n) {
        return buildTree(1, n);
    }

    public static List<TreeNode> buildTree(int left, int right){
        List<TreeNode> list = new LinkedList<TreeNode>();
        if(left > right) {
            list.add(null);
            return list;
        }

        for(int i = left; i <= right; i ++){
            List<TreeNode> treeLeft = buildTree(left, i-1);
            List<TreeNode> treeRight = buildTree(i+1, right);

            for(TreeNode tl : treeLeft){
                for(TreeNode tr : treeRight){
                    TreeNode tree = new TreeNode(i);
                    tree.left = tl;
                    tree.right = tr;
                    list.add(tree);
                }
            }
        }
        return list;
    }
}
