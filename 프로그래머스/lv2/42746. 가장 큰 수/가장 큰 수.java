import java.util.*;

class Solution {
    public String solution(int[] numbers) {
        String answer = "";
        String[] sarr = new String[numbers.length];
        
        for(int i = 0; i < numbers.length; i++) {
            sarr[i] = Integer.toString(numbers[i]);
        }
        
        Arrays.sort(sarr, new Comparator<String>() {
            @Override
            public int compare(String a, String b) {
                return (b+a).compareTo(a+b);
            }
        });
        
        if (sarr[0].equals("0")) return "0";
        
        StringBuilder str = new StringBuilder();
        
        for(String a : sarr) {
            str.append(a);
        }

        answer = str.toString();
        return answer;
    }
}