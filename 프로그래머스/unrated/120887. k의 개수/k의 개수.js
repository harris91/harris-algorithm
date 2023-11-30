const solution = (s, e, f) => {
    let str = ""
    for(let i = s; i <= e; i++) str+=String(i)
    return str.split(f).length-1
}