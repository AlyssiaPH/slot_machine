const fs = require('fs')
const path = require('path')

module.exports = function (dirPath, extentionFilter, callback) {
    fs.readdir(dirPath, function (err, filesList) {
        if (err) {
            return callback(err)
        }
        filesList = filesList.filter(function (fileName) {
            return path.extname(fileName) === '.' + extentionFilter
        })
        callback(null, filesList)
    })
}