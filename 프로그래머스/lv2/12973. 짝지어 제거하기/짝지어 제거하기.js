function solution(s){
    let arr = [s[0]];

    for(let i = 1, len = s.length; i < len; i++) {
        arr.push(s[i]);
        if(arr[arr.length-1] == arr[arr.length-2]){
            arr.pop();
            arr.pop();
        }
    }
    
    return arr.length == 0 ? 1 : 0;
}