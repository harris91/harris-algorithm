const solution = (list, n) => {
    let answer = [];
    for(let i = 0, len = list.length; i < len; i+=n) {
        let cnt = 0;
        let arr = [];
        while(cnt < n) {
            arr.push(list[i+cnt])
            cnt++;
        }
        
        answer.push(arr);
    }
    
    return answer;
}