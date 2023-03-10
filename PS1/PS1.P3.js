/* function that execute the passed decorator function on the passed
string and return the result */
/*
let execute = (string, decorator) => {
    return decorator(string);
}
*/

/* a lambda function that returns an array containing fragments of
the input string broken on the character ‘c’ */
/*
let split_c = (string) => {
    let letters = string.split('')
    let pieces = ''
    let result = []
    for (let string_counter = 0; string_counter < letters.length; string_counter++) {
        // every time meet a 'c,' before concat-ing,
        // split into a string piece and push to the result first
        if (letters[string_counter] === 'c') {
            result.push(pieces);
            pieces = '';
        }
        pieces = pieces.concat(letters[string_counter]);
        // push the last piece
        if (string_counter === letters.length - 1) {
            result.push(pieces);
        }
    }
    console.log(result);
}
*/

/* a lambda function that replaces all of the ‘a’ characters with
‘A’ characters */
/*
let replace_a = (string) => {
    const originalString = string
    let modifiedString = ''
    let letters = string.split('')
    let numberReplaced = 0
    for (let string_counter = 0; string_counter < letters.length; string_counter++) {
        // every time meet an 'a,' concat an 'A' instead of 'a'
        if (letters[string_counter] === 'a') {
            modifiedString = modifiedString.concat('A');
            numberReplaced += 1;
        }
        else {
            modifiedString = modifiedString.concat(letters[string_counter]);
        }
    }
    let ResultTable = {}
    ResultTable.originalString = originalString
    ResultTable.modifiedString = modifiedString
    ResultTable.numberReplaced = numberReplaced
    ResultTable.length = string.length
    console.table(ResultTable);
}
*/

/* two expressions that call the functions */
/*
execute('supercalifragilisticexpialidocious', split_c);
execute('supercalifragilisticexpialidocious', replace_a);
*/

const p3 = (str, func) => func(str);

const p31 = p3('supercalifragilisticexpialidocious',
    str => str.replace(/c/g, "*c").split('*'));
const p32a = p3('supercalifragilisticexpialidocious',
    str => {
        return {
            originalString: str,
            modifiedString: str.replace(/a/g, 'A'),
            numberReplaced: str.match(/a/g).length,
            length: str.length
        };
    }
    );
console.log(p31);
console.log(p32a);

