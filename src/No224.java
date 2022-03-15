import java.util.ArrayDeque;
import java.util.Deque;

public class No224 {
    public static void main(String[] args) {
        Deque<Integer> num = new ArrayDeque<>();
        Deque<Character> op = new ArrayDeque<>();
        String s = "   -2-(-6-1)";
        s = s.replace(" ", "");
        if(s.charAt(0) == '-'){
            num.add(0);
        }
        int len = s.length();
        for(int i = 0; i < len; i ++){
            if(s.charAt(i) == '('){
                op.addLast(s.charAt(i));
                if(i+1 < len && s.charAt(i+1) =='-'){
                    num.addLast(0);
                }
            }else if(s.charAt(i) == ')') {
                calculate(num, op);
                op.removeLast();
            }else if(s.charAt(i) >= '0' && s.charAt(i) <='9'){
                int number = 0;
                while (i < len && s.charAt(i) >= '0' && s.charAt(i) <= '9'){
                    number = number*10 + s.charAt(i)-'0';
                    i ++;
                }
                i --;
                num.addLast(number);
            }else if(s.charAt(i) == '+' || s.charAt(i) == '-'){
                calculate(num, op);
                op.addLast(s.charAt(i));
            }
        }
        if(num.size() >= 2){
            calculate(num, op);
        }
        System.out.println(num.pollLast());
    }

    public static void calculate(Deque<Integer> num, Deque<Character> op){
        if(num.size() < 2) return;
        if(op.peekLast() == '(') return;
        int b = num.pollLast();
        int a = num.pollLast();
        char operation = op.pollLast();
        if(operation == '+'){
            num.addLast(a+b);
        }else if(operation == '-'){
            num.addLast(a-b);
        }
    }
}
