// étape 1 - 3 qui fonctionnent

let stringLatin = "hello, world".toUpperCase();
let newArrayLatin = [];
let conversionLatinToMorseArray = [];
let conversionLatinToMorseString = "";


function getLatinCharacterList() {
    for (let i = 0; i < stringLatin.length; i++) {
        newArrayLatin.push(stringLatin.charAt(i));
    }
    return newArrayLatin;
}

const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    ',': '--..--',
    ' ': '.......'
}

// // étape 2 qui fonctionne

function translateLatinCharacter(char) {
    return latinToMorse[char];
}

// // étape 3

function encode(stringLatin) {
    const caractersLatinArray = getLatinCharacterList(stringLatin);
    caractersLatinArray.forEach((char) => {
        const translatedElementInMorse = translateLatinCharacter(char)
        conversionLatinToMorseArray.push(translatedElementInMorse)
    })
    conversionLatinToMorseArray.forEach((el) => {
        conversionLatinToMorseString += el + " ";
    });
    return conversionLatinToMorseString;
}
encode();

// // étape 4

let newMorseArray = [];
let conversionMorseToLatinArray = [];
let stringMorse = '.... . .-.. .-.. --- --..-- ....... .-- --- .-. .-.. -..';
let conversionMorseToLatinString = "";

function getMorseCharacterList() {
    const stringMorseInArrayMorse = stringMorse.split(" ");
    return stringMorseInArrayMorse;
}

const morseToLatin = {
    '-': "T",
    '.': "E",
    '--': "M",
    '..': "I",
    '.-': "A",
    '-.': "N",
    '.--': "W",
    '..-': "U",
    '...': "S",
    '---': "O",
    '.-.': "R",
    '-..': "D",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..-': "X",
    '-...': "B",
    '.---': "J",
    '.--.': "P",
    '.-..': "L",
    '..-.': "F",
    '...-': "V",
    '....': "H",
    '--..--': ',',
    '.......': ' ',
};

function translateMorseCharacter() {
    const morseArray = getMorseCharacterList();
    morseArray.forEach((el) => {
        conversionMorseToLatin.push(morseToLatin[el])
    })
    return conversionMorseToLatin;
}

function decodeMorseToLatin() {
    conversionMorseToLatinArray = translateMorseCharacter();
    conversionMorseToLatinArray.forEach((el) => {
        conversionMorseToLatinString += el
    })
    return conversionMorseToLatinString;
}

decodeMorseToLatin();