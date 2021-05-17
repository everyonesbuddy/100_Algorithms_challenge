// Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

//You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

//my solution
// function alternatingSums(arr) {
//     //set two variables to 0 that holds the total weight of team 1 and team 2
//     let teamOneTotalWeight = 0;
//     let teamTwoTotalWeight = 0;
//     //loop through array
//     for (let i = 0; i < arr.length; i++){
//         //check if odd, index is added to team one weight, if even index is added to team 2
//         let numerator = arr.length - 1;
//         if(numerator % 2 === 0){
//             teamOneTotalWeight += arr[i]
//         } else {
//             teamTwoTotalWeight += arr[i]
//         }
//     }
//     return [teamOneTotalWeight, teamTwoTotalWeight]
// }

function alternatingSums(arr) {
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach((element, index) => {
        if(index % 2 === 0){
            evenSum += element
        }else {
            oddSum += element
        }
    })

    return [evenSum, oddSum]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))