import java.util.HashMap;
import java.util.Collection;

class Solution {
    public int solution(String[][] clothes) {
        int answer = 1;
        HashMap<String, Integer> hmap = new HashMap<>();
        
        for(String[] sarr : clothes) {
            hmap.put(sarr[1], hmap.getOrDefault(sarr[1], 1) + 1);
        }
        
        Collection<Integer> resultSet = hmap.values();
        for(int a : resultSet) {
            answer = answer * (a);
        }
        
        return answer - 1;
    }
}