const router = require('./router');

console.log('App was loaded...');

const http = require('http');

http.createServer((req, res) => {
    console.log(req.url);

    router(req, res);
}).listen(8080);