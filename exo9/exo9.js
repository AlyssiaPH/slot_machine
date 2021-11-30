let bl = require('bl');
let http = require('http');
let urls = process.argv.splice(2);

let resultArray = []
let doneCount = 0

urls.forEach(function (url, index) {
    http.get(url, function(res)
    {
        res.setEncoding("utf8");
        res.pipe(bl(function (err,data)
        {
            if(err)
            {
                console.log('error');
            }
            resultArray[index] = data.toString()
            doneCount++
            if (doneCount === urls.length){
                resultArray.forEach(element => console.log(element))
                //console.log(resultArray)
            }
        }))
    })
});

