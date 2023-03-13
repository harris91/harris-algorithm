function solution(num, total) {
    const answer = []; 
    const center = { num: Math.ceil(total/num), idx: Math.floor(num/2)}
    for(let i = 0; i < num; i++) answer.push(center.num - (center.idx-i));
    
    return answer;
}