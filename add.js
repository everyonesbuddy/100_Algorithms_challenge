//write a function that returns the sum of two numbers.
//Write a function that returns the sum of all numbers regardless of # of params

//solution with 2 params
// function add(param1, param2){
//     sum = param1 + param2
//     return sum
// }

//solution regardless of number of params
function add2(...param1){
    let sum = 0;

    for(let i = 0; i < param1.length; i++){
        sum += param1[i]
    }
    return sum
}

// console.log(add(1, 2));
// console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));