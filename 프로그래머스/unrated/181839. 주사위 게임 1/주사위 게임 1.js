const solution = (a,b) => {
    if      ((a+b)%2)       return 2*(a+b)
    else if (a%2&&b%2)      return a**2 + b**2
    else                    return Math.abs(a-b)
}
