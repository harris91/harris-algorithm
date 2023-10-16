const solution = (num, n) => num.reduce((a,c,i) => {
    if (a > n) {
        num.splice(i); 
        return a;
    }
    return a+c
})