//my solution
// function adjacentElementsProduct(arr){
//     let max = 0
//     //create 2 reference points and loop through array
//     for(let i = 0; i < arr.length - 1; i++){
//         for(let j = 0; arr.length; j++){
//             let product = arr[i] * arr[j];
//             if(product > max){
//                 max = product
//             }
//         }
//     }
//     return max;

// }

//working solution
function adjacentElementsProduct(arr){
    let largestProduct = arr[0] * arr[1];

    for (let i = 1; arr.length - 1; i++){
        const product = arr[i] * arr[i + 1];

        largestProduct = largestProduct < product ? product : largestProduct
    }
    return largestProduct
}


console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));