//my solution
// function characterParity(symbol) {

// let solution = parseInt(symbol);


// if(typeof(solution) !== "number" ){
//     return "Not a digit"
// } else if (solution % 2 === 0){
//     return "even"
// } else {
//     return "odd"
// }
// }

//working solution

// function characterParity(symbol) {

// let solution = parseInt(symbol);



// return isNaN(solution) ? 'not a digit' : solution % 2 === 0 ? 'even' : 'odd'
// }

//Revision

function characterParity(symbol) {
  let value = parseInt(symbol);

  if(isNaN(value)) {
    return "Not a digit"
  } else if(value % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}


console.log(characterParity('5'))
console.log(characterParity('8'))
 console.log(characterParity('q'))