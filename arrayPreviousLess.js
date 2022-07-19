//working Solution
// function arrayPreviousLess(array){
//     const lessThanList = [];

//     for(let i = array.length -1; i >= 0; i--){
//         for(let j = i; j >= 0; j--) {
//             if(array[i] > array[j]){
//                 lessThanList.unshift(array[j]);
//                 break;
//             }else if(j === 0){
//                 lessThanList.unshift(-1)
//             }
//         }
//     }

//     return lessThanList
// }

//Revision
 function arrayPreviousLess (arr) {
    let newArr = [];

    for( let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i-1]) {
            newArr.push(arr[i-1])
        } else {
            newArr.push(-1)
        }
    }
    return newArr
 }

console.log(arrayPreviousLess([3,5,2,4,5]));
