function solution(citations) {
    let answer = 0;
    citations.sort((a,b) => b-a);
    for(let i = 0, len = citations.length; i < len; i++) {
        if(citations[i] > i) answer++;
        else break;
    }
    
    return answer;
}