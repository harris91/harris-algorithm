const solution = (str, m, c) => {
    let answer = "";
    for(let i = c-1, len = str.length; i < len; i+=m) answer+=str[i];
    
    return answer;
}