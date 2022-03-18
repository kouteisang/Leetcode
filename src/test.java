import java.util.Stack;

public class test {
    public static void main(String[] args) {

        String ans = removeDuplicateLetters("bcabc");
        System.out.println(ans);

    }
    public static String removeDuplicateLetters(String s) {
        int len = s.length();
        int cnt[] = new int[26];
        for(int i = 0; i < len; i ++){
            cnt[s.charAt(i)-'a'] ++;
        }
        Stack<Character> stk = new Stack();
        for(int i = 0; i < len; i ++){
            cnt[s.charAt(i) - 'a'] --;
            if(stk.contains(s.charAt(i)))
                continue;
            while(!stk.isEmpty() && s.charAt(i) < stk.peek() && cnt[stk.peek()-'a'] > 0){
                stk.pop();
            }
            stk.push(s.charAt(i));
        }
        StringBuilder sb = new StringBuilder();
        while(!stk.isEmpty()){
            sb.append(stk.pop());
        }
        sb = sb.reverse();
        return sb.toString();
    }
}
