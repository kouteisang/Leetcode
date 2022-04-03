import java.util.*;

public class No692 {

    public static void main(String[] args) {
        String[] words = {"i","love","leetcode","i","love","coding"};
        int k = 2;
        Map<String, Integer> map = new HashMap<>();
        for(String word : words){
            int cnt = map.getOrDefault(word, 0);
            map.put(word, cnt+1);
        }
        PriorityQueue<Map.Entry<String, Integer>> pq = new PriorityQueue<>(new Comparator<Map.Entry<String, Integer>>() {
            @Override
            public int compare(Map.Entry<String, Integer> o1, Map.Entry<String, Integer> o2) {
                return o1.getValue() != o2.getValue() ?
                        o1.getValue() - o2.getValue() : o2.getKey().compareTo(o1.getKey());
            }
        });
        int cnt = 0;
        for(Map.Entry<String, Integer> entry : map.entrySet()){
            cnt ++;
            pq.offer(entry);
            if(cnt > k){
                pq.poll();
            }
        }
        List<String> list = new ArrayList<>();
        while(!pq.isEmpty()){
            list.add(pq.poll().getKey());
        }
        Collections.reverse(list);

    }

}
