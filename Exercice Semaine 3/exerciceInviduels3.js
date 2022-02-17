// Cette fonction MARCHE YEAHHHHH
function gamePlay() {
    let givenNumber = parseInt(prompt("please give us a number"));

    function didIWin() {
        const numberToGuess = 22;
        if (givenNumber === numberToGuess) {
            console.log("Bravo, vous avez trouvé le bon nombre");
            return true;
        } else {
            while (givenNumber !== numberToGuess) {
                if (givenNumber < numberToGuess) {
                    console.log("t'es trop bas, gros");
                    // return false;
                } else if (givenNumber > numberToGuess) {
                    console.log("t'es trop haut, gros");
                }
                givenNumber = parseInt(prompt("Not quite... try again"));
                // ;
            }
            console.log("Bravo, vous avez trouvé le bon nombre, enfin!!");
        }
    }
    didIWin();
    // }
}

gamePlay();

// let givenNumber = parseInt(prompt("please give us a number"));
// console.log(givenNumber);
// const numberToGuess = 22;
// console.log(numberToGuess);

// if (givenNumber === numberToGuess) {
//     console.log("Bravo, vous avez trouvé le bon nombre");
// } else {
//     while (givenNumber !== numberToGuess) {
//         if (givenNumber < numberToGuess) {
//             console.log("t'es trop bas, gros");
//         } else if (givenNumber > numberToGuess) {
//             console.log("t'es trop haut, gros");
//         }
//         givenNumber = parseInt(prompt("Not quite... try again"));
//     }
//     console.log("Bravo, vous avez trouvé le bon nombre")