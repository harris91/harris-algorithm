const solution = (arr,n) => {
    if(arr.length%2) return arr.map((v,i) => i%2 ? v : v+n)
    else             return arr.map((v,i) => i%2 ? v+n : v)
}