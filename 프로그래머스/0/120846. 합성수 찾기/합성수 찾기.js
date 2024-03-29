function solution(n) {
    let result = 0;
    for(let i = 4; i <= n; i++) {
        if(i%2 == 0 || isCompositeNumber(i)) result++;
    }
    
    return result;
}


function isCompositeNumber(n) {
    for(let i = 3, len = n/2; i < len; i++) {
        if(n%i == 0) return true;
    }
    return false;
}