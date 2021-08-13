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
    // write your solution here
    //разбиваем строку на 10символов
    let arrSplit = returnChunksArray(expr, 10)
    //убираем нули 00 и 10 в точку, 11 в тире
    arrSplit = delZero(arrSplit)
    // console.log(arrSplit)
    // в морзе
    arrSplit = txtInMorze(arrSplit)
    // console.log(arrSplit)
    return arrSplit
}
// разбиваем строку на 10символов
function returnChunksArray(str, chunkSize) {
    var arr = [];
    while(str !== '') {
        arr.push(str.substring(0, chunkSize));
        str = str.substring(chunkSize);
    }
    // console.log(arr)
    return arr;
}
//убираем нули 00 и 10 в точку, 11 в тире
function delZero (arr){
    // console.log(arr)
    let newArr = []
    arr.forEach( item =>{
        item = item.match(/.{1,2}/g)
        // console.log(item)
        let newItem = ''
        item.forEach( item => {
            if(item === '00'){
                // console.log('---')
            }
            if(item === '10'){
                newItem+='.'
            }
            if(item === '11'){
                newItem+='-'
            }
            if(item === '**'){
                newItem+='**'
            }
        })
        newArr.push(newItem)
    })
    // console.log('Not ZERO ',newArr)
    return newArr
}

//цифры в морзе
function txtInMorze (arr){
    let newArr = ''
    let buffer = ''
    arr.forEach( item =>{
        (item === '**********') ? buffer += ' ' :  buffer+=MORSE_TABLE[item]
    })
    newArr+=buffer
    console.log(newArr)
    return newArr
}

module.exports = {
    decode
}