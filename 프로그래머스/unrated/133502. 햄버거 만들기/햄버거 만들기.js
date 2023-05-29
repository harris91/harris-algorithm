function solution(ingredient) {
    let answer = 0;
    let ingredList = [];
    
    for(const item of ingredient) {
        ingredList.push(item);
        
        if(ingredList.length >= 4 && ingredList.slice(-4).join('') == "1231") {
            answer++;
            ingredList.splice(-4);
        }
    }
    
    return answer;
}