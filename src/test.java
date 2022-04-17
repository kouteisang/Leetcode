import java.sql.Array;

class test {
    public static void main(String[] args) {
        deleteAndEarn(new int[]{2, 3, 4});
    }

    public static int deleteAndEarn(int[] nums) {
        int len = nums.length;
        int[] number = new int[10010];
        for(int i = 0; i < len; i ++){
            number[ nums[i] ] += nums[i];
        }
        int max = nums[0];
        int ans = 0;
        for(int i = 2; i < 10010; i ++){
            ans = Math.max(ans, number[i] + max);
            max = Math.max(max, number[i]);
        }
        return ans;
    }
}