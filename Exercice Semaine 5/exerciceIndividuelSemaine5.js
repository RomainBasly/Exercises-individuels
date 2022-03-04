// étape 1
// let nombreEtages = 1;
let array = [];
let test = 0;
let emptySpace = " "
let line = "";
let star = "*";
let slash = "/"
let antislash = "\\"
let ligne = "";

function base(nombreEtages) {
    baseLine = slash + star.repeat((2 * nombreEtages + 1)) + antislash;
    return baseLine;
}

function sapin(nombreEtages) {
    const multipliedEmptySpace = emptySpace.repeat(nombreEtages + 1);
    firstLine = multipliedEmptySpace + "+";
    console.log(firstLine)
    array.push(firstLine);

    while (test < nombreEtages + 1) {
        const multipliedEmptySpace = emptySpace.repeat(nombreEtages - test);
        console.log(multipliedEmptySpace + base(test))
        test++
    }
    return array;

}