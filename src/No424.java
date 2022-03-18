import java.lang.reflect.Array;
import java.util.Arrays;

public class No424 {
    public static void main(String[] args) {
        int ans = characterReplacement("AABABBA", 1);
        System.out.println(ans);
    }

    public static int characterReplacement(String s, int k) {
        int len = s.length();
        int left = 0;
        int right = 0;
        int maxn = 0;
        int[] cnt = new int[26];
        int ans = 0;
        while (right < len){
            cnt[s.charAt(right) - 'A'] ++;
            maxn = Arrays.stream(cnt).max().getAsInt();
            if(right - left + 1 - maxn > k){
                cnt[s.charAt(left) - 'A'] --;
                left ++;
            }
            ans = Math.max(ans, right - left + 1);
        }
        return ans;
    }
}
