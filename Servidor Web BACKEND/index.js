const http = require('http');

http
    .createServer((req, res) => {
        res.write("te amo luis");
        res.end();
    })
    .listen(8080)