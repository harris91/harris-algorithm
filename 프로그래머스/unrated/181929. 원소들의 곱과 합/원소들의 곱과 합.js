const solution = (arr, a = arr.reduce((a,c)=>a+c)**2, b = arr.reduce((a,c)=>a*c,1)) => a > b ? 1 : 0