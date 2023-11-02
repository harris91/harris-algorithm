const solution = nums => {
    let answer = '';
    for(let i = 1, len = nums.length; i < len; i++) {
        const n = nums[i] - nums[i-1];
        switch(n) {
            case -1:  answer += 's'; break;
            case 10:  answer += 'd'; break;
            case -10: answer += 'a'; break;
            default:  answer += 'w';
        }
    }
    
    return answer;
}