const solution = nums => nums.reduce((acc, cur) => {
    while(cur > 1) {
        acc++
        cur = (cur%2 ==0 ? cur : cur-1)/2
    }
    return acc;
},0)