function solution(s) {
    let answer = s.length;
    let len = s.length;

    for(let i = 1; i <= len/2; i++) {
        let arr = []

        for(let j = 0; j < len; j+=i) {
            arr.push(s.slice(j, j+i)); 
        }

        const result = compress(arr);
        answer = result < answer ? result : answer;
    }

    return answer;
}

function compress(arr) {
    let cnt = 1;
    let prev = '';
    let equal = false;
    let nums = [];

    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] == prev) {
            if(!equal) equal = !equal;
            arr.splice(--i,1)
            cnt++;

        } else {
            prev = arr[i];
            equal = false;
            if(cnt !== 1) nums.push(cnt);
            cnt = 1;
        }
    }

    return arr.join('').length + nums.reduce((acc,val) => {
        return acc += val.toString().length;
    },0);
}