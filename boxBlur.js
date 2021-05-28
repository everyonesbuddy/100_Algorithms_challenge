function boxBlur(images){
    const res = [];

    for(let y = 0; y < images.length - 2; y++) {
        const line = [];

        for(let x = 0; x < images[y].length - 2; x++) {
            let sum = 0;
            let count = 0;

            for(let a = y; a < y + 3; a++){
                for(let b = x; b < x + 3; b++){
                    sum += images[a][b];
                    count++
                }
            }
            line.push(Math.floor(sum/count))
        }
        res.push(line);
    }

    return res;
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));
