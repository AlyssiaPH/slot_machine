const config = require('./config')
const http = require('http');
const express = require('express')
const {request, response} = require("express");
const app = express()
const port = 8080




//
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
//
// app.get('/me',(req,res) =>{
//     res.send('Welcom me')
// })
//
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     let page = ''
//     if (req.url === '/'){
//         page = "Welcome in Serve"
//     }else  if(req.url === '/you'){
//         page = 'welcome in you'
//     }else {
//         page = 'error 404'
//     }
//     res.write(page);
//     res.end();
// }).listen(8080);