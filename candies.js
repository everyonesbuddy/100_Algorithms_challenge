// //My solution
// function candies(n,m){
//     //find the remainder of m/n
//     let remainder = m % n

//     //subtract remainder from m and assign that value to a new variable
//     let candiesEaten = m - remainder;

//     return candiesEaten;
// }

//revision

function candies(n,m){
    let candyPerChild = Math.floor(m/n);
    let totalCanndyEaten = n * candyPerChild

    return totalCanndyEaten;
}


console.log(candies(3, 10));
