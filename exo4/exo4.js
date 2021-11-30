let fs = require('fs')
let process = require('process')
let filePath = process.argv[2]


fs.readFile(filePath, 'utf8' , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log((data.split('\n').length)-1)
})