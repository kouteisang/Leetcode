import java.util.*;

public class No398 {

    static Map<Integer, List<Integer>> map;
    static Random random = new Random();
    public static void main(String[] args) {
        int[] nums = {1,2,3,3,3};
        int[] numbers;
        numbers = nums;
        map = new HashMap<>();
        int len = numbers.length;
        for(int i = 0; i < len; i ++){
            if(!map.containsKey(numbers[i])){
                List<Integer> list = new ArrayList();
                list.add(i);
                map.put(numbers[i], list);
            }else {
                List<Integer> list = map.get(numbers[i]);
                list.add(i);
                map.put(numbers[i], list);
            }
        }
    }

    public static int pick(int target) {
        List<Integer> list = map.get(target);
        int len = list.size();
        int pos = random.nextInt(len);
        return list.get(pos);
    }
}
