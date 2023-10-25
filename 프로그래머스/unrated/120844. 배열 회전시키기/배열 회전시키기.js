const solution = (nums, str) => {
    if(str == 'right') {
        const v = nums.pop()
        nums.unshift(v)
    } else {
        const v = nums.shift()
        nums.push(v)
    }
    
    return nums
}