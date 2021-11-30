const process = require('process')

let result = process.argv
let finalResult = 0

for (let i = 0; i < result.length; i++) {
    if(!isNaN(result[i])){
        finalResult = finalResult + parseInt(result[i])
    }
}

console.log(finalResult)