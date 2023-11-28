function createAccount(pin, amount = 0) {
    return {
        deposit(pinInput, adding) {
            if (pinInput !== pin) {
                return ('Invalid PIN.')
            }
            amount += adding
            return (`Succesfully deposited $${adding}. Current balance: $${amount}.`)
        },
        checkBalance(pinInput) {
            if (pinInput !== pin) {
                return ('Invalid PIN.')
            }
            return (`$${amount}`)
        },
        withdraw(pinInput, removing) {
            if (pinInput !== pin) {
                return ('Invalid PIN.')
            }
            if (removing > amount) {
                return ("Withdrawal amount exceeds account balance. Transaction cancelled.")
            }
            amount -= removing
            return (`Succesfully withdrew $${removing}. Current balance: $${amount}.`)
        },
        changePin(pinInput, newPin) {
            if (pinInput !== pin) {
                return ('Invalid PIN.')
            }
            pin = newPin
            return ("PIN successfully changed!")
        }

    }
}





module.exports = { createAccount };
