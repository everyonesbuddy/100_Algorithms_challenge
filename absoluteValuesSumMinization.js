//my solution 
// function absoluteValuesSumMinimization(arr) {
//     //check if the array is even
//     if (arr.length % 2 === 0){
//         return arr[(arr.length / 2) + 1]
//     } else {
//         return arr[arr.length / 2]
//     }
// }

//working solution
function absoluteValuesSumMinimization(arr) {
    //check if the array is even
    if (arr.length % 2 === 0){
        return arr[(arr.length / 2) - 1]
    } else {
        return arr[Math.floor(arr.length / 2)]
    }
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));