import java.util.*;

class Solution {
    public int solution(int[] priorities, int location) {
        int answer = 0;
        Queue<Integer> q = new LinkedList<>();
            
        for(int i = 0; i < priorities.length; i++) {
            q.offer(priorities[i]);
            q.offer(i);
        }
        
        Arrays.sort(priorities);
        
        for(int i = priorities.length - 1; i >= 0; i--) {
            int num = priorities[i];
            
            while(true) {
                int priority = q.poll();
                int locNum = q.poll();
                
                if(priority == num) {
                    answer++;
                    if(locNum == location) {
                        return answer;
                    }
                    break;
                } else {
                    q.offer(priority);
                    q.offer(locNum);
                }
            }
        }
        
        return answer;
    }
}