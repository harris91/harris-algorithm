function solution(array) {
    const sortedArray = array.reduce((acc, cur) => {
        if(acc[cur]) acc[cur].count += 1
        else acc[cur] = {num:cur, count:1}
        return acc
    },[]).sort((a,b) => b.count - a.count)
    
    const max = sortedArray[0].count
    const filterdArray = sortedArray.filter(v => v.count == max)
    
    return filterdArray.length > 1 ? -1 : filterdArray[0].num
}