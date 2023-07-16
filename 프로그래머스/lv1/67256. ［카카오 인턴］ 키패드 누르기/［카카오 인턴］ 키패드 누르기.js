let rightHand = true;

function solution(numbers, hand) {
    var answer = '';
    let len = numbers.length;
    let lNum = [1,1];
    let rNum = [3,1];

    if(hand != "right") { rightHand = false;}

    for(let i = 0; i < len; i++) {

        if(numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7){
            answer += 'L'
            lNum = getLocation(numbers[i]);
        } else if(numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9){
            answer += 'R'
            rNum = getLocation(numbers[i]);
        } else {
            let result = compare(lNum, rNum, numbers[i]);

            answer += result[0];
            lNum = result[1];
            rNum = result[2];

        }


    }


    return answer;
}


function compare(left, right, number) {
    let num = getLocation(number);

    let disLeft = Math.abs(left[0] - num[0]) + Math.abs(left[1] - num[1])
    let disRight = Math.abs(right[0] - num[0]) + Math.abs(right[1] - num[1])


    if(rightHand) {
        if(disLeft >= disRight) {
            right = num;
            return ['R', left, right]
        } else {
            left = num;
            return ['L', left, right]
        }
    } else {
        if(disLeft <= disRight) {
            left = num;
            return ['L', left, right]
        } else {
            right = num;
            return ['R', left, right]
        }
    }

}

function getLocation(num){
    switch(num) {
        case 1: return [1,4]; 
        case 2: return [2,4]; 
        case 3: return [3,4]; 
        case 4: return [1,3]; 
        case 5: return [2,3];
        case 6: return [3,3];
        case 7: return [1,2];
        case 8: return [2,2];
        case 9: return [3,2];
        case 0: return [2,1];
    }
}