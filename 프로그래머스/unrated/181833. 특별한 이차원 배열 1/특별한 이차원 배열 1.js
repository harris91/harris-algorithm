const solution = n => {
    return Array(n).fill().map((_,i) => {
        const arr = Array(n).fill(0)
        arr[i] = 1
        return arr
    })
}