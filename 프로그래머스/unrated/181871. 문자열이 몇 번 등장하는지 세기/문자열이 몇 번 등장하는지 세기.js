const solution = (str, pat) => {
    let result = 0
    
    while(str.length >= pat.length) {
        if(str.indexOf(pat) > -1) {
            result++
            str = str.substring(str.indexOf(pat))
        }
        
        str = str.substring(1)
    }
    
    return result
}