//my solution
function compareIntegers(string1, string2){
    //convert strings to integers
    let integer1 = parseInt(string1);
    let integer2 = parseInt(string2);
    //create an if statement comparing the integers
    if(integer1 > integer2){
        return "greater"
    }else if(integer1 < integer2){
        return "less"
    } else{
        return 'equal'
    }
}
console.log(compareIntegers('12', '13'));
console.log(compareIntegers('875', '799'));
console.log(compareIntegers('1000', '1000'));