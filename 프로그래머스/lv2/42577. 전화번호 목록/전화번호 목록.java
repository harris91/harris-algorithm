import java.util.HashMap;

class Solution {
    public boolean solution(String[] phone_book) {
        boolean answer = true;
        HashMap<String, Integer> hmap = new HashMap<>();
        
        for(String key : phone_book) {
            hmap.put(key, 1);
        }
        
        for(String a : phone_book) {
            for(int j = 1; j < a.length(); j++) {
                if(hmap.containsKey(a.substring(0, j))) {
                    return !answer;
                }
            }    
        }
      
        return answer;
    }
}