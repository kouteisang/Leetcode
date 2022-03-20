import java.util.Arrays;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

class Node{
    int count;
    String s;
    public Node(String s, int count){
        this.count = count;
        this.s = s;
    }
}



public class test {
    public static void main(String[] args) {
        minMutation("AACCGGTT", "AACCGGTA", new String[]{"AACCGGTA"});

    }

    public static int minMutation(String start, String end, String[] bank) {
        char[] replace = {'A', 'G', 'C', 'T'};
        Queue<Node> queue = new LinkedList();
        queue.offer(new Node(start, 0));
        while(!queue.isEmpty()){
            Node node = queue.poll();
            StringBuilder s = new StringBuilder(node.s);
            int count = node.count;
            if(s.toString().equals(end)){
                return count;
            }
            int len = s.length();
            for(int i = 0; i < len; i ++){
                char origin = s.charAt(i);
                for(int j = 0; j < 4; j ++){
                    if(replace[j] != origin){
                        s.setCharAt(i, replace[j]);
                        if(Arrays.asList(bank).contains(s.toString())){
                            queue.offer(new Node(s.toString(), count+1));
                        }
                    }
                }
                s.setCharAt(i, origin);
            }
        }
        return -1;
    }
}
