const filterFn = require('./filter.js')
const dirPath = process.argv[2]
const extentionFilter = process.argv[3]

filterFn(dirPath, extentionFilter, function (err, list) {
    if (err) {
        return console.error('Error:', err)
    }
    list.forEach(function (file) {
        console.log(file)
    })
})