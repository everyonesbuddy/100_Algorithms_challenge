//Given a string replace each character by the next one in the english alphabet.

function alphabeticShift(str){

        const alphabet = ['a', 'b', 'c', 'd' , 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] ;
        let inputShifted = str.split('');
        for (let i = 0; i < inputShifted.length; i++){
            let index = 0;

            if(inputShifted[i] !== 'z'){
                index  = alphabet.indexOf(inputShifted[i]) + 1;
            }
            inputShifted[i] = alphabet[index]
        }
        return inputShifted.join('')
}

console.log(alphabeticShift('crazy'));