import java.util.LinkedList;
import java.util.List;

public class No22 {
    public static void main(String[] args) {
        int n = 3;
        LinkedList<LinkedList<String>> ans = new LinkedList<>();
        LinkedList<String> list0 = new LinkedList<>();
        list0.add("");
        LinkedList<String> list1 = new LinkedList<>();
        list1.add("()");
        ans.add(list0);
        ans.add(list1);
        for(int i = 2; i <= n; i ++){
            LinkedList<String> temp = new LinkedList<>();
            for(int j = 0; j < i; j ++){
                List<String> str1 = ans.get(j);
                LinkedList<String> str2 = ans.get(i-j-1);
                for(String s1:str1){
                    for(String s2:str2){
                        String tRes = "(" + s1 +")" + s2;
                        temp.add(tRes);
                    }
                }
            }
            ans.add(temp);
        }
        System.out.println(ans.get(3));
    }
}
