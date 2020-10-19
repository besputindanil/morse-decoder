const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprArray = [];

    for (let i = 0; i < expr.length; i += 10) {
        let exprElement = expr.slice(i, i + 10);
        exprArray.push(exprElement);
    }

    function decodeExprElement(element) {
        return element.replace(/^0+/g, '').replace(/10/g, '.').replace(/11/g, '-').replace(/\*{10}/g, ' ');
    };

    const decodedString = exprArray
        .map(item => decodeExprElement(item))
        .map(item => {
        if (item !== ' ') {
            return MORSE_TABLE[item]
        }
        return item
        })
        .join('');

    return decodedString;
}

module.exports = {
    decode
}