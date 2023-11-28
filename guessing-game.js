function guessingGame() {
    const target = Math.floor(Math.random() * 100);
    let won = false
    let guesses = 0

    function guess(num) {
        if (won) return ("The game is over, you already won!")

        guesses++

        if (num < target) return (`${num} is too low!`)
        else if (num > target) return (`${num} is too high!`)
        else {
            won = true
            return (`You win! You found ${target} in ${guesses} guesses.`)
        }
    }

    return guess
}

module.exports = { guessingGame };
