function solution(numbers, target) {
    let answer = 0;
    let len = numbers.length;
    
    function recursive(index, sum) {
        if(index == len) {
            if(sum == target) answer++;
            return;
        }
        
        recursive(index+1, sum + numbers[index]);
        recursive(index+1, sum - numbers[index]);
    }
    
    recursive(0, 0);
    
    return answer;
}