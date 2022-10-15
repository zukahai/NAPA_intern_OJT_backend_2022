const http = require('http')

function wait(millisec) {
    var now = new Date;
    while (new Date - now <= millisec);
}
http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": 'text/html' });
        res.write('hello')
        res.end()
    }
    if (req.url === '/wait') {
        wait(5000)
        console.log('wait');
        res.writeHead(200, { "Content-Type": 'text/html' });
        res.write('Done>>>wait')
        res.end()
    }
    if (req.url === '/timeout') {
        setTimeout(() => {
            res.writeHead(200, { "Content-Type": 'text/html' });
            res.write('Done>>>timeout')
            res.end()
        }, 5000)
        console.log('timeout');
    }
}).listen(3000, "127.0.0.1", function() {
    console.log('server start at http://127.0.0.1:3000')
})