const solution = n => {
    if(n == 1) return [1]
    const answer = [1]
    for(let i = 2; i <= n/2; i++) if(n%i == 0) answer.push(i)
    answer.push(n)
    
    return answer
}