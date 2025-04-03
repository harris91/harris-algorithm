function solution(emergency) {
    const sortedArray = [...emergency].sort((a,b) => b - a)
    return emergency.map(v => sortedArray.indexOf(v)+1)
}