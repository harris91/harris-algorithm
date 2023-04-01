function solution(want, number, discount) {
    let result = 0;

    want = setWantList(want, number);
    for(let i = 0, len = discount.length - 10; i <= len; i++){
        if( compareItemList(want, get10Days(i, discount)) ) result++;
    }

    return result;
}

function setWantList(want, nums) {
    let list = [];

    for(const idx in want) {
         const item = want[idx];

        for(let i = 0, len = nums[idx]; i < len; i++) {
            list.push(item);
        }
    }


    return list.sort();
}

function get10Days(idx, discount) {
    let list = [];

    for(let i = idx, len = idx+10; i < len; i++){
        list.push(discount[i]);
    }

    return list.sort();
}

function compareItemList(want, discount) {
    return want.toString() == discount.toString() ? true : false;
}