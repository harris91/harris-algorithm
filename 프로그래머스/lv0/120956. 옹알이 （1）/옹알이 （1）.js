function solution(babbling) {
    return babbling.reduce((acc, cur) => {
        return cur.replace(/(aya)|(ye)|(woo)|(ma)/g, '') == "" ? ++acc : acc;    
    },0);
}