const express = require('express')
const {request, response} = require("express");
const app = express()
const port = 8080
const axios = require('axios')

app.get('/', (req, res) => {
    res.send('Hello World!')
}).listen(port)

// axios({method: 'get', url: 'http://bit.ly/2mTM3nY', responseType: 'stream'}).then(function (response) {response.data.pipe('toto')});