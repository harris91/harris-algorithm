const solution = (a,b,n) => {
    let answer = 0;
    while(n >= a) {
        let recycle = parseInt(n/a)*b;
        n = (n%a)+recycle;
        answer+=recycle;
    }
    
    return answer
}