function solution(n) {
    let ea = 1
    while(true) {
        if (ea*6 % n == 0) return ea
        else ea++
    }
}