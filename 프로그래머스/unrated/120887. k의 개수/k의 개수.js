const solution = (s, e, f) => {
    let str = ""
    for(let i = s; i <= e; i++) str+=i
    return str.split(f).length-1
}