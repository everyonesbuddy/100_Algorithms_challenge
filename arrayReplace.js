//my solution
// function arrayReplace(arr, elemToReplace, subElement){
//     //loop through array
//     for(let i = 0; i < arr.length; i++){
//         //if i = elemToReplace, splice it and replace it with subElement
//         if(arr[i] === elemToReplace){
//             arr.splice(i, 1, subElement)
//         }
//     }
//     return arr
// }

// //alternate solution
// function arrayReplace(arr, elemToReplace, subElement){
//     arr.forEach((element, index) => {
//         if(element === elemToReplace) {
//             arr[index] = subElement
//         }
//     });
//     return arr
// }

//revision

function arrayReplace(arr, elemToReplace, subElement) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === elemToReplace) {
            arr.splice(arr.indexOf(arr[i]), 1, subElement)
        }
    }
    return arr
}

console.log(arrayReplace([1, 2, 1], 1, 3))
