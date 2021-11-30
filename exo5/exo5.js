const fs = require('fs')
const folderPath = process.argv[2]
const extensionFilter = process.argv[3]

fs.readdir(folderPath, function callback(err, list) { /* ... */
    list.forEach(fileName => {
        if (fileName.split(".")[1] === extensionFilter) {
            console.log(fileName)
        }
    })
})