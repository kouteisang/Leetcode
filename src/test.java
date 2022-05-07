import java.sql.Array;
import java.util.*;

class test {
    static long[] temp = null;
    static long reverse = 0;
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        long[] v = new long[n];
        temp = new long[n+1];
        for(int i = 0; i < n; i ++){
            v[i] = sc.nextInt();
        }
        long[] preSum = new long[n+1];
        long ans = 0;
        preSum[0] = 0;
        for(int i = 1; i <= n; i ++){
            preSum[i] = preSum[i-1] + v[i-1];
        }
        for(int i = 1; i <= n; i ++){
            preSum[i] -= i*k;
        }
        mergeSort(preSum, 0, n);
        System.out.println(reverse);
    }

    public static void mergeSort(long[] preSum, int l, int r){
        if(l >= r) return;
        int mid = (l+r)/2;
        mergeSort(preSum, l, mid);
        mergeSort(preSum, mid+1, r);
        int k = l;
        int i = l;
        int j = mid+1;
        while(i <= mid && j <= r){
            if(preSum[i] > preSum[j]){
                temp[k ++] = preSum[j ++];
            }else {
                reverse += r-j+1;
                temp[k ++] = preSum[i ++];
            }
        }
        while (i <= mid){
            temp[k ++] = preSum[i ++];
        }
        while (j <= r){
            temp[k ++] = preSum[j ++];
        }
        for(int p = l; p <= r; p ++){
            preSum[p] = temp[p];
        }
    }
}