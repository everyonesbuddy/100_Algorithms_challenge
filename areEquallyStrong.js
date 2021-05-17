//mySolution 1 -correct
// function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
//     let yourStrength = yourLeft + yourRight;
//     let friendStrength = friendsLeft + friendsRight;

//     if(yourStrength === friendStrength) {
//         return true
//     } else {
//         return false
//     }
// }

//my solution 2 - wrong

// function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
//     // let yourStrength = yourLeft + yourRight;
//     // let friendStrength = friendsLeft + friendsRight;

//     if(yourLeft === friendsLeft || friendsRight && yourRight ===  friendsLeft || friendsRight) {
//         return true
//     } else {
//         return false
//     }
// }

//alternate solution
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;

    return yourStrongest === friendStrongest && yourWeakest === friendWeakest
}


console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))