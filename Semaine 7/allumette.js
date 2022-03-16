let numberOfMatches = 50; // we define an initial value to start the game

function askNumber() {
    do {
        let number = parseInt(prompt("Please remove between 1-6 matches")) // We prompt to ask a value & we convert it into an integer
        if (number >= 1 && number <= 6) {
            numberOfMatches -= number
            console.log(numberOfMatches)
        } else {
            alert("Please enter a number between 1 and 6, darling")
                //number = parseInt(prompt("Please remove between 1-6 matches"))
        }
    } while (numberOfMatches > 0)
    alert("you won bébi")
}

askNumber();