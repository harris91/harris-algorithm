function solution(intStrs, k, s, l) {
    return intStrs.map(v => v.slice(s,s+l)*1).filter(v => k < v)
}