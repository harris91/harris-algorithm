function solution(common) {
    const [a,b,c] = common.slice(-3);
    return b-a == c-b ? c*2-b : c*(b/a);
}