const sum = a => a.reduce((s,c)=> s+c)
const compare = (a, a2) => a == a2 ? 0 : a > a2 ? 1 : -1
const solution = (a, a2, len = a.length, len2 = a2.length) => len == len2 ? compare(sum(a), sum(a2)) : len > len2 ? 1 : -1