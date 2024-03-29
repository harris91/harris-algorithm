function solution(board, k) {
    let result = 0;
    for(let i = 0, iLen = board.length; i < iLen; i++ ){
        for(let j = 0, jLen = board[i].length; j < jLen; j++) {
            if( i + j <= k ) result += board[i][j];
        }
    }
    
    return result;
}