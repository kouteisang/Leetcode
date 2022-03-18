public class No395 {
    public static void main(String[] args) {
        //很重要的是要知道我们滑动窗口滑动的是什么，为什么要滑动！！！
        //然后滑动窗口的题目都是right++, 某一个条件不满足后再left ++
        longestSubstring("bbaaacbd",3);
    }

    public static int longestSubstring(String s, int k) {
        int len = s.length();
        int left = 0;
        int right = 0;
        int type = 0;
        int sum = 0;
        int ans = 0;
        for(int i = 1; i <= 26; i ++){
            int cnt[] = new int[26];
            left = 0;
            right = 0;
            type = 0;
            sum = 0;
            while(right < len){
                int num = s.charAt(right) - 'a';
                cnt[num] ++;
                if(cnt[num] == 1) type ++;
                if(cnt[num] == k) sum ++;
                while(type  > i){
                    num = s.charAt(left) - 'a';
                    cnt[num] --;
                    if(cnt[num] == 0) type --;
                    if(cnt[num] == k-1) sum --;
                    left ++;
                }
                if(type == sum){
                    ans = Math.max(ans, right - left + 1);
                }
                right ++;
            }
        }
        return ans;
    }
}
