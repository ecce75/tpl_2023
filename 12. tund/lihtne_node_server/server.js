const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    fs.readFile('ilmateade.html',(err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            return res.end('Error faili laadimisega')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data);
    })
})

server.listen(3000, () => {
    console.log('Server kuulab pordil 3000. Külasta http://localhost:3000');
});