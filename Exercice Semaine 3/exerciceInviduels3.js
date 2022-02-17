// Cette fonction MARCHE YEAHHHHH
let givenNumber = parseInt(prompt("please give us a number"));
const numberToGuess = 22;

function didIWin(givenNumber) {
    if (givenNumber === numberToGuess) {
        return true;
    } else {
        return false;
    }
}

function gamePlay() {
    const proposition = didIWin();
    while (givenNumber !== numberToGuess) {
        if (givenNumber < numberToGuess) {
            console.log("t'es trop bas, gros");
        } else if (givenNumber > numberToGuess) {
            console.log("t'es trop haut, gros");
        }
        givenNumber = parseInt(prompt("Not quite... try again"));
    }
    console.log("Bravo, vous avez trouvé le bon nombre, enfin!!");
}

// }

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