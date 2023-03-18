function solution(n) {
    let answer = '';
    let arr = ['4','1','2'];
    
    while(n >= 1) {
        answer = arr[n%3] + answer;
        n = parseInt(n/3) - (n%3 == 0 ? 1 : 0);
    }
    
    return answer
}