// my Solution
// function areSimilar(a, b) {
//     if(a.length !== b.length){
//         return false
//     }
//     for (let i = 0; i < a.length; i ++){
//         for (let j = 0; j < b.length; j++){
//             if(a[i] === b[j]){
//                 return true
//             }else {
//                 return false
//             }
//         }
//     }
// }

// working solution
function areSimilar(a, b) {
    const c = [];
    let d = [];

    if(a.toString() === b.toString()){
        return true
    }

    for(let i = 0; i < a.length; a++){
        if(a[i] !== b[i]){
            c.push(a[i]);
            d.push(b[i]);
        }
    }

    d = d.reverse();

    if(c.length === 2 && (c.toString() === d.toString())){
        return true
    }

    return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));