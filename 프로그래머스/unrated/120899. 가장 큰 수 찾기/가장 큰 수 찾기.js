const solution = arr => {
    const max = Math.max(...arr)
    return [max, arr.indexOf(max)]
}