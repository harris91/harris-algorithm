const solution = (arr,n) => {
    let i = n
    return arr.filter(num => {
        if(i == n) {
            i = 1
            return num
        } 
        else {
            i++
        }
    })
}