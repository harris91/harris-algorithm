import java.util.*;
class Solution {
    public int solution(int bridge_length, int weight, int[] truck_weights) {
        int answer = 0;
        int total = 0;

        Queue<Truck> list = new LinkedList<>();
        Queue<Truck> q = new LinkedList<>();

        for(int a : truck_weights) {
            Truck t = new Truck(a , 0);
            list.offer(t);
        }

        while(!list.isEmpty() || !q.isEmpty()) {
            answer++;

            if(!q.isEmpty() && answer == q.peek().enter + bridge_length) {
                total -= q.peek().wt;
                q.poll();
            }

            if(!list.isEmpty() && total + list.peek().wt <= weight) {
                q.offer(new Truck(list.peek().wt, answer));
                total += list.peek().wt;
                list.poll();
            }
        }

        return answer;
    }
}

class Truck {
    int wt;
    int enter;

    public Truck(int wt, int enter) {
        this.wt = wt;
        this.enter = enter;
    }
}