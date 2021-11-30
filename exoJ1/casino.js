let crypto = require("crypto")

function casino(runInt){

    let totalWin = 0
    let totalLoose = 0

    for (let i = 0; i < runInt; i++) {
        /**
         * Array of symbols
         * @type {string[]}
         */
        const symbols = ["♠", "♥", "♦", "♣", "☃", "☯", "☂", "☄"]

        /**
         * Array instance for the result
         * @type {*[]}
         */
        let result = []

        /**
         * Generate a random int and add a symbol in the result
         */
        for (let i = 0; i < 3; i++) {
            let randomInt = crypto.randomInt(0,8)
            result.push(symbols[randomInt])
        }

        /**
         * Check if all the element of an array are equals
         * @param tab
         * @returns {*} boolean
         */
        function allEqual(tab) {
            return tab.every(v => v === tab[0])
        }

        /**
         * Check if the result contains identical symbols
         * @type {*}
         */
        let equalResult = allEqual(result)

        if (equalResult) {
            //console.log("BRAVO " + result )
            totalWin ++
        } else {
            //console.log("Pas bravo, t'es nul " + result )
            totalLoose ++
        }

    }
console.log("WIN : " +totalWin + "\nLOOSE : " +totalLoose)
}

casino(1000)


