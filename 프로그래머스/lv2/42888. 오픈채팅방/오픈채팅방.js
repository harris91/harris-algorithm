function solution(record) {
    let name = {};
    let event = [];
    let uid = [];
    
    for(let i = 0, len = record.length; i < len; i++) {
        let arr = record[i].split(' ');
        
        if(arr[0] == 'Enter') {
            event.push(arr[0]);
            uid.push(arr[1]);
            name[arr[1]] = arr[2];
        } else if(arr[0] == 'Leave') {
            event.push(arr[0]);
            uid.push(arr[1]);
        } else {
            name[arr[1]] = arr[2];
        }
    }
    
    return event.map((v, i) => {
        return v == "Enter" 
        ? `${name[uid[i]]}님이 들어왔습니다.` 
        : `${name[uid[i]]}님이 나갔습니다.`;
    });
}