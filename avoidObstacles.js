function avoidObstacles(arr){
    arr = arr.sort((a,b) => a-b);
    const largestArrayVal = arr[arr.length - 1];

    for (let i = 1; i <= largestArrayVal + 1; i++){
        if(arr.every((element) => element % i !== 0)) {
            return i
        }
    }
}
console.log(avoidObstacles([5, 3, 6, 7, 9]))
