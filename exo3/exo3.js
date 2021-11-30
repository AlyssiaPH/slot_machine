let fs = require('fs')
let process = require('process')
let filePath = process.argv[2]

try {
    const data = fs.readFileSync(filePath, 'utf8')
    console.log((data.split('\n').length)-1)
} catch (err) {
    console.error(err)
}