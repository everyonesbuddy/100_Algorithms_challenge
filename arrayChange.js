// function arrayChange (inputArray) {
//     let count = 0;

//     for(let i = 0; i < inputArray.length; i ++) {
//         if(inputArray[i] >= inputArray[i + 1]) {
//             const difference = (inputArray[i] + 1) - inputArray[i + 1];
//             inputArray[i + 1] = inputArray[i] + 1;
//             count += difference
//         }
//     }


//     return count;
// }

//Revision
function arrayChange(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= arr[i + 1]) {
        const diffrence = (arr[i] + 1) - arr[i + 1]
        arr[i + 1] = arr[i] + 1
        count += diffrence
    }
    }
    return count
}

console.log(arrayChange([1, 1, 1]));