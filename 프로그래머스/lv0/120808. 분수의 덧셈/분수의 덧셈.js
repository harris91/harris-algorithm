function solution(denum1, num1, denum2, num2) {
    const answer = [denum1*num2+denum2*num1, num1*num2];
    const gcd = getGCD(answer[0], answer[1]);

    return [answer[0]/gcd , answer[1]/gcd]
}

function getGCD (num1, num2) {
    return num2 > 0 ? getGCD(num2, num1 % num2) : num1;
};