//Given an array of strings return another array with the longest string.

// function allLongestStrings (arr) {
//     //initialize a new array with an empty string as its first index
//     let newArr = [""];
//     // console.log(newArr);
//     // console.log(newArr.length);
//     // console.log(newArr[newArr.length - 1])
//     // console.log(arr)
//     //loop through existing array
//     for (let i = 0; i < arr.length; i++){
//         //compare each index of existing array to new array.length - 1
//         //if length of that index greater bounce the index in existing array and push new array, if equal push
//         if(arr[i] > newArr[newArr.length - 1]){
//             return newArr.splice(newArr[newArr.length - 1], 1, arr[i])
//         } else if (arr[i] = newArr[newArr.length - 1]){
//             return newArr.push(arr[i])
//         } else {
//             return newArr
//         }
        
//     }
//     return newArr
// }

//working string
function allLongestStrings (arr) {
    let longestLength = 0;
    const longestWords = []

    arr.forEach((word) =>  {
        longestLength = longestLength < word.length ? word.length : longestLength;
    });

    arr.forEach((word) => {
        if(word.length === longestLength){
            longestWords.push(word)
        }
    })

    return longestWords
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));