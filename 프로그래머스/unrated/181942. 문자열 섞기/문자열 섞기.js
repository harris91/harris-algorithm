const solution = (str1, str2) => {
    let answer = ""
    str1.split("").forEach((c,i) => answer+=(c+str2[i]))
    
    return answer
}