import java.util.Arrays;

/*
* Heap implementation by Cheng
* 2022.04.03
* */
public class Heap {
    public static void main(String[] args) {
        int arr[] = {7, 3, 8, 5, 1, 2};
        int n = arr.length;
        for(int i = n/2-1; i >= 0; i --){
            buildMaxHeap(arr, n, i);
        }
        int len = arr.length;
        for(int i = n-1; i >= 0; i --){
            int t = arr[0];
            arr[0] = arr[i];
            arr[i] = t;
            buildMaxHeap(arr, i, 0);
        }
        for(Integer a : arr){
            System.out.print(a + " ");
        }
    }

    private static void buildMaxHeap(int[] arr, int n, int i) {
        while(true){
            boolean flag = false;
            int largestIndex = i;
            int left = 2 * i + 1;
            int right = 2 * i + 2;
            if(left <  n && arr[left] > arr[largestIndex]){
                largestIndex = left;
            }
            if(right < n && arr[right] > arr[largestIndex]){
                largestIndex = right;
            }
            if(largestIndex != i){
                int t = arr[i];
                arr[i] = arr[largestIndex];
                arr[largestIndex] = t;
                flag = true;
                i = largestIndex;
            }
            if(!flag) break;
        }
    }
}
