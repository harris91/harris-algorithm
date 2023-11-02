const solution = nums => {
    const answer = [];
    for(let i = 1, len = nums.length; i < len; i++) {
        const n = nums[i] - nums[i-1];
        let result;
        switch(n) {
            case -1: result = 's'; break;
            case 10: result = 'd'; break;
            case -10: result = 'a'; break;
            default: result = 'w';
        }
        
        answer.push(result);
    }
    
    return answer.join('');
}