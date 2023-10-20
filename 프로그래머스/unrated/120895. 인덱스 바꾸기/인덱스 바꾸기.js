const solution = (s, n1, n2) => {
    const arr = s.split("")
    const temp = s[n1]
    arr[n1] = arr[n2]
    arr[n2] = temp
    
    return arr.join("")
}