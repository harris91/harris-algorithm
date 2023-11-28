const solution = (a, d, included) => {
    const arr = included.map((v,i) => v ? i : -1).filter(v => v > -1)
    return arr.reduce((acc,cur) => acc + cur)*d + arr.length*a
}