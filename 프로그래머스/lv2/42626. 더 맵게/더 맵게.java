import java.util.PriorityQueue;

class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        PriorityQueue<Integer> q = new PriorityQueue<>();

        for( int a : scoville ) {
            q.offer(a);
        }

        while(q.size() > 1) {
            if(q.peek() >= K) {
                return answer;
            }

            q.offer(q.poll() + (q.poll() * 2));
            answer++;

            if(q.size() == 1 && q.peek() >= K) {
                return answer;
            }
        }

        return -1;
    }
}