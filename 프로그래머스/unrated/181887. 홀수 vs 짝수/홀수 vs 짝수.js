const solution = list => Math.max(...list.reduce((a,c,i) => {
    a[i%2] += c;
    return a;
},[0,0]))