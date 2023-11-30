const solution = n => {
    for(let i = 1, sum = 1; i <= 10; i++) {
        sum*=i
        if(sum > n) return i-1
    }
    
    return 10
}
