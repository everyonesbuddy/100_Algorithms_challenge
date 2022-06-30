// function alphabetSubsequence(str) {

//     const chars = str.split('')
//     const charValues = [];

//     chars.forEach((char) => {
//         charValues.push(char.charCodeAt(0))
//     });

//     if (new Set(charValues).size !== charValues.length){
//         return false
//     }

//     for (let i = 0; i < charValues.length - 1; i++){
//         if(charValues[i] >= charValues[i + 1]) {
//             return false
//         }
//     }

//     return true
// }

 //Revision

 function alphabetSubsequence(str) {
     const charArr = str.split('');
     const alphabet = ['a', 'b', 'c', 'd' , 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] ;
     for (let i = 0; i < charArr.length; i++) {
         if (alphabet.indexOf(charArr[i]) < alphabet.indexOf(charArr[i + 1])) {
             return true
         } else {
             return false
         }
     }

 }

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))