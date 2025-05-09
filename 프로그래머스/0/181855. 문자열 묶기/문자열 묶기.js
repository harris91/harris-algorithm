function solution(strArr) {
    let arr = Array(31).fill(0);
    strArr.forEach(str => arr[str.length] += 1);
    return arr.sort((a,b) => b-a).shift()
}