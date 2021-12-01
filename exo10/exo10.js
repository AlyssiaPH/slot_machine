const http = require('http')
const net = require('net')

// Grab an arbitrary unused port.


const server = net.createServer(function (socket) {

})
server.listen(() => {
    console.log('opened server on', server.address());
});
server.listen(8000)

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     let page = ''
//     if (req.url === '/'){
//         page = "Welcome in Serve" + new Date()
//     }else  if(req.url === '/you'){
//         page = 'welcome in you'+ new Date()
//     }else {
//         page = 'error 404' + new Date()
//     }
//     res.write(page);
//     res.end();
// }).listen(8080);
