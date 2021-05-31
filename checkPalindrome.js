//my solution
// function checkPalindrome(string){
//     let newString = string.toLowerCase();
//     let newArray = newString.split('')
//     let reversedArray = newArray.reverse()
//     let newestString = reversedArray.join('')

//     if(newestString === newString){
//         return true
//     }else {
//         return false
//     }
// }

//alternate solution
function checkPalindrome(string){
    let originalLowerCase = string.toLowerCase();
    
    let reversedWord = originalLowerCase.split('').reverse().join('');

    return originalLowerCase === reversedWord;
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));