const solution = (a,b,c) => {
    let set = new Set([a,b,c])
    let answer = a+b+c
    if(set.size <= 2) answer *= a**2+b**2+c**2
    if(set.size == 1) answer *= a**3+b**3+c**3
    
    return answer
}