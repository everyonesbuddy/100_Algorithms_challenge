//my solution
function arrayMaximalAdjacentDifference(arr){
    //initialize a variable called max difference and set to 0
    let maxDiff = 0;

    //loop through the array
    for(let i = 0; i < arr.length; i++){
        //subtract the adjacent index from the current index
        //the value will be adjacent so use math.abs() and store that value in maxDiff
        let diff = Math.abs(arr[i] - arr[i+1])
        //compare the iterations and which one has the highest difference, assig value to maxDiff
        if(diff > maxDiff){
            maxDiff = diff
        }
        
    }

    //return value of max difference
    return maxDiff;
}

//alternate solution
function arrayMaximalAdjacentDifference(arr){
    let maxDiff = Math.abs(arr[0] - arr[1])

    for(let i = 0; i < arr.length; i++){
        let absoluteDiff = Math.abs(arr[i-1] - arr[i])

        if(absoluteDiff > maxDiff){
            maxDiff = absoluteDiff
        }
    }
    
    return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2,4,1,0]))
