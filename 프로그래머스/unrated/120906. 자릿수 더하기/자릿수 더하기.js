function solution(n) {
    return (n+"").split('').reduce((acc,cur) => {return acc+=cur*1},0);
}