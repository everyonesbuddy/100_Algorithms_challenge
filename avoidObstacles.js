// function avoidObstacles(arr){
//     arr = arr.sort((a,b) => a-b);
//     const largestArrayVal = arr[arr.length - 1];

//     for (let i = 1; i <= largestArrayVal + 1; i++){
//         if(arr.every((element) => element % i !== 0)) {
//             return i
//         }
//     }
// }

//revision

function avoidObstacles(arr) {
    arr = arr.sort((a,b) => a-b);
    let numOfJumps = 0

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i + 1]) {
            numOfJumps += 1
        }
    }
    return numOfJumps
}
console.log(avoidObstacles([5, 3, 6, 7, 9]))
