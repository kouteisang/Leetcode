public class test {
    public static void main(String[] args) {
        String s = "aaabb";
        int k = 3;
        if(k == 1) System.out.println(s.length());
        int res = longestSubstring(s, 3);
        System.out.println(res);
    }
    public static int longestSubstring(String s, int k) {
        if(k == 1) return s.length();
        int len = s.length()-1;
        return dfs(0, len, k, s);
    }

    public static int dfs(int left, int right, int k, String s){
        if(right <= left) return 0;
        if(right - left + 1 < k) return 0;
        int[] cnt = new int[26];
        for(int i = left; i <= right; i ++){
            cnt[s.charAt(i) - 'a'] ++;
        }
        int pos = -1;
        for(int i = left; i <= right; i ++){
            if(cnt[s.charAt(i) - 'a'] < k){
                pos = i;
                break;
            }
        }
        if(pos == -1){
            return right - left + 1;
        }
        while(left < pos && s.charAt(left) == s.charAt(pos)){
            left ++;
        }
        while(right > pos && s.charAt(right) == s.charAt(pos)){
            right --;
        }
        return Math.max(dfs(left, pos-1, k, s), dfs(pos+1, right, k, s));
    }
}
