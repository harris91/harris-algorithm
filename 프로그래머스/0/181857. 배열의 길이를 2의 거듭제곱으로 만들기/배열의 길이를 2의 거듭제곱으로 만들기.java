import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr) {
        int len = arr.length;
        int max = 1;
        
        while(len > max) max *= 2;
            
        return Arrays.copyOf(arr, max);
    }
}