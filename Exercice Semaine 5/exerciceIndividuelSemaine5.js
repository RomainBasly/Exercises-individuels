// étape 1
// let nombreEtages = 1;
let array = [];
let index = 0;
let emptySpace = " "
let line = "";
let star = "*";
let slash = "/"
let antislash = "\\"
let ligne = "";

function base(nombreEtages) {
    if (nombreEtages % 3 === 0 && nombreEtages !== 0) {
        let baseLineN = slash + star.repeat((2 * nombreEtages - 1)) + antislash;
    } else {
        baseLineN1 = baseLineN;
    }
    return baseLineN;
}

// résultat ok pour la partie suivante
// function sapin(nombreEtages) {
//     const multipliedEmptySpace = emptySpace.repeat(nombreEtages + 1);
//     firstLine = multipliedEmptySpace + "+";
//     array.push(firstLine);

//     while (index < nombreEtages + 1) {
//         const multipliedEmptySpace = emptySpace.repeat(nombreEtages - index);
//         let resultat = multipliedEmptySpace + base(index)
//         index++
//         array.push(resultat)
//     }
//     for (element in array) {
//         console.log(array[element])
//     }
//     return array;
// }

//sapin(2);
//sapin(30);
//sapin(5);

// étape 2

function sapin(nombreEtages) {
    const multipliedEmptySpace = emptySpace.repeat(nombreEtages + 1);
    firstLine = multipliedEmptySpace + "+";
    array.push(firstLine);

    while (index < nombreEtages + 1) {
        const multipliedEmptySpace = emptySpace.repeat(nombreEtages - index);
        const resultat = multipliedEmptySpace + base(index)
        index++
        array.push(resultat)
    }
    for (element in array) {
        console.log(array[element])
    }
    return array;
}