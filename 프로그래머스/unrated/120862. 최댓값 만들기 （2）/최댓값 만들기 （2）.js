const solution = n => {
    const [a,b] = n.sort((a,b) => b-a)
    const [c,d] = n.reverse()
    return Math.max(a*b, c*d)
}