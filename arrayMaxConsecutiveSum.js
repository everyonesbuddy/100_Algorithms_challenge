//working Solution

// function  arrayMaxConsecutiveSum(array, num){
//     let sum = 0;
//     let max = 0;

//     for (let i = 0; i < num; i++){
//         sum += array[i]
//     }

//     max = sum;

//     for(let i = num; i < array.length; i++){
//         sum -= array[i-num];
//         sum += array[i];


//         if(sum > max) {
//             max = sum
//         }
//     }

//     return sum
// }

//resvision solution
function arrayMaxConsecutiveSum(array, num){
    let maximumPossibleSum = 0;
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        sum = array[i] + array[i + 1];

         if(sum > maximumPossibleSum) {
             maximumPossibleSum = sum
         }

    }
    return maximumPossibleSum
}

console.log(arrayMaxConsecutiveSum([2,3,5,1,6], 2))
