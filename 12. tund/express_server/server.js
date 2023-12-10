const express = require('express');
const app = express();

const port = 3002;

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', (req, res) => {
	res.sendFile(__dirname + '/public/about.html');
});

app.listen(port, () => {
	console.log(`Server kuulab pordil ${port}. Külasta http://localhost:${port}`);
});