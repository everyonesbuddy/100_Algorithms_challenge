// function centuryFromYear(year) {
//     const century = year / 100

//     if(year % 100 === 0){
//         return century
//     }
//     return Math.floor(century) + 1
// }

//Revision
function centuryFromYear(year) {
    const century = Math.ceil(year/100)
    return century;
}


console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));