//my solution
function addTwoDigits(n) {
    const num = n.toString().split('');
    return num.reduce((a,b) => {
        return parseInt(a) + parseInt(b)
    })

}

console.log(addTwoDigits(29));