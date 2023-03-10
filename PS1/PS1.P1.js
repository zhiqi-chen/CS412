/*

let reverse = (string) => {
    let alphabet_string = 'abcdefghijklmnopqrstuvwxyz'
    let alphabet = alphabet_string.split('')
    let letters = string.split('')
    let result = ''
    for (let alphabet_counter = 26; alphabet_counter > 0; alphabet_counter--) {
            for (let string_counter = letters.length - 1; string_counter >= 0; string_counter--) {
                if (letters[string_counter] === alphabet[alphabet_counter]) {
                    result = result.concat(alphabet[alphabet_counter])
                }
            }
    }
    console.log(result);
}

*/

const reverse = str => str.split('').reverse().join('');
let test = 'supercalifragilisticexpialidocious'
console.log(reverse(test));


