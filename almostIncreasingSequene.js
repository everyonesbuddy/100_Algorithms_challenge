//Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// function almostIncreasingSequence(arr){
//     let count = 0;

//     for(let i = 0; i < arr.length ; i++){
//         if(arr[i]  <= arr[i - 1]){
//             count++;
//             if(arr[i] <= arr[i - 2] && arr[ i + 1] <= arr[i -1]){
//                 return false
//             }
//         }
//     }

//     return count <= 1;
// }

//Revision
function almostIncreasingSequence(arr) {

    for(let i = 0; i < arr.length; i++) {
        arr.splice(arr[i], 1)
        if(arr[i] > arr[i + 1] && arr[i + 1] > arr[i + 2]  ) {

        }
        return true
    }

}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2]))