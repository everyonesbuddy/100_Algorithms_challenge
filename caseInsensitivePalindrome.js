//my solution
function isCaseInsensitivePalindrome(inputString) {
    let newString = inputString.toLowerCase();
    let newArray = newString.split('')
    let reversedArray = newArray.reverse()
    let newestString = reversedArray.join('')

    if(newestString === newString){
        return true
    }else{
        return false
    }


}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));