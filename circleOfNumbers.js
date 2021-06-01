//my solution
// function circleOfNumbers(n, firstNumber) {
//     const newArray = [];
//     for(let i = firstNumber; i <= n; i++){
//         newArray.push(i);
    
//     }
//     return newArray[Math.floor(newArray.length / 2)]
// }

//alternative solution
function circleOfNumbers(n, firstNumber) {
    const newArray = [];
    const halfWay = n / 2;

    for(let i = 0; i <= n; i++){
        newArray.push(i);
    }
    if(firstNumber < halfWay){
        return newArray[firstNumber + halfWay];
    }
    return newArray[firstNumber - halfWay];

    
}
console.log(circleOfNumbers(10, 2));