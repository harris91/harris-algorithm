const solution = (arr, intervals) => intervals.reduce((acc, cur) => acc.concat(arr.slice(cur[0],cur[1]+1)),[])
