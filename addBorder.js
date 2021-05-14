//my solution
function addBorder(arr){
    arr.unshift("*****");
    arr.push("*****");

    for(let i = 1; i < arr.length - 1; i++){
        arr[i] = "*".concat(arr[i], '*')
    }
    
    return arr;
}

console.log(addBorder(["abc", "ded"]));