// Cette fonction MARCHE YEAHHHHH
let numberToGuessGivenByPlayer1 = parseInt(prompt("Please choose a number between 0 and 50, that Player 2 needs to guess"));
let givenNumberByPlayer2 = parseInt(prompt("Please choose a number between 0 and 50, chosen by Player 1"));

function askPlayer1() {
    if (numberToGuessGivenByPlayer1 > 0 && numberToGuessGivenByPlayer1 < 50) {
        return numberToGuessGivenByPlayer1;
    } else {
        while (numberToGuessGivenByPlayer1 < 0 || numberToGuessGivenByPlayer1 > 50 || isNaN(numberToGuessGivenByPlayer1)) {
            if (numberToGuessGivenByPlayer1 < 0) {
                console.log("sous 0");
                numberToGuessGivenByPlayer1 = parseInt(prompt("Please give me a number between 0 and 50, mon bichon Player 1"));
            } else if (numberToGuessGivenByPlayer1 > 50) {
                console.log("supérieur à 50")
                numberToGuessGivenByPlayer1 = parseInt(prompt("Please give me a number between 0 and 50, mon bichon Player 1"));
            } else if (isNaN(numberToGuessGivenByPlayer1)) {
                console.log("This is not a number, mon bichon")
                numberToGuessGivenByPlayer1 = parseInt(prompt("Please Player 1 help me by giving me a number, mon bichon Player 1"));
            }
        }
        return numberToGuessGivenByPlayer1;
    }
}

function askPlayer2() {
    if (givenNumberByPlayer2 > 0 && givenNumberByPlayer2 < 50) {
        return givenNumberByPlayer2;
    } else {
        while (givenNumberByPlayer2 < 0 || givenNumberByPlayer2 > 50 || isNaN(givenNumberByPlayer2)) {
            if (givenNumberByPlayer2 < 0) {
                console.log("sous 0");
                givenNumberByPlayer2 = parseInt(prompt("Please give me a number between 0 and 50, mon bichon, Player 2"));
            } else if (givenNumberByPlayer2 > 50) {
                console.log("supérieur à 50")
                givenNumberByPlayer2 = parseInt(prompt("Please give me a number between 0 and 50, mon bichon, Player 2"));
            } else if (isNaN(givenNumberByPlayer2)) {
                console.log("This is not a number, mon bichon")
                givenNumberByPlayer2 = parseInt(prompt("Please Player 2 help me by giving me a number, mon bichon, Player 2"));
            }
        }
        givenNumberByPlayer2 = parseInt(prompt("please give us a number between 0 and 50, player 2"));
        return givenNumberByPlayer2;
    }
}

function didIWin(givenNumberByPlayer2, numberToGuessGivenByPlayer1) {
    numberToGuessGivenByPlayer1 = askPlayer1();
    // console.log(numberToGuessGivenByPlayer1)
    givenNumberByPlayer2 = askPlayer2();
    // console.log(givenNumberByPlayer2);
    if (givenNumberByPlayer2 === numberToGuessGivenByPlayer1) {
        return true;
    } else {
        return false;
    }
}

function gamePlay() {
    didIWin();
    numberToGuessGivenByPlayer1 = askPlayer1();
    while (givenNumberByPlayer2 !== numberToGuessGivenByPlayer1) {
        if (givenNumberByPlayer2 < numberToGuessGivenByPlayer1) {
            console.log("t'es trop bas, gros");
            console.log(`le nombre à trouver est : ${numberToGuessGivenByPlayer1} et ta proposition est ${givenNumberByPlayer2}`)
        } else if (givenNumberByPlayer2 > numberToGuessGivenByPlayer1) {
            console.log("t'es trop haut, gros");
            console.log(`le nombre à trouver est : ${numberToGuessGivenByPlayer1} et ta proposition est ${givenNumberByPlayer2}`)
        }
        givenNumberByPlayer2 = parseInt(prompt("Not quite, player 2... try again"));
        didIWin();
    }
    console.log("Bravo, vous avez trouvé le bon nombre, enfin!!");
}


gamePlay();
/* }


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
'*/