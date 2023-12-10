const http = require('http');
const fs = require('fs');
const path = require('path');

function serveFile(path, contentType, res) {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            return res.end('Error faili laadimisega');
        }
        res.writeHead(200, {'Content-Type': contentType});
        res.end(data);
    })
}

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        serveFile('index.html', 'text/html', res);
    } else if (req.url === '/about') {
        serveFile('about.html', 'text/html', res);
    } else if (req.url.match('\.css$')) {
        var cssPath = path.join(__dirname, req.url);
        serveFile(cssPath, 'text/css', res);
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Lehte ei leitud');
    }
})

server.listen(3001, () => {
    console.log('Server kuulab pordil 3001. Külasta http://localhost:3001')
})