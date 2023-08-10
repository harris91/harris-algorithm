function solution(array) {
    let max = 0;
    const removedDuplicateArray = [...new Set(array)]
    const filteredArray = removedDuplicateArray.map(key => {
        const count = array.filter(v => v == key).length
        if(count > max) max = count
        return {key, count}
    }).filter(v => v.count == max)
    
    return filteredArray.length > 1 ? -1 : filteredArray[0].key
}