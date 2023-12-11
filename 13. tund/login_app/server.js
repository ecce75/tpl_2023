const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs'); // Required to read HTML files

const app = express();
let users = {
'admin': 'admin'
};

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
	secret: 'your_secret_key',
	resave: false,
	saveUninitialized: true,
}));

app.use((req, res, next) => {
	if (!req.session.user && req.path !== '/login' && req.path !== '/register') {
		res.redirect('/login');
	} else {
		next();
	}
});

app.get('/login', (req, res) => {
	fs.readFile('login.html', 'utf8', (err, html) => {
		if (err) {
			res.status(500).send('Error loading login page');
			return;
		}
	res.send(html);
	});
});

app.post('/login', (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	if (users[username] && users[username] === password) {
		req.session.user = username;
		res.redirect('/home');
	} else {
	res.send('Invalid credentials!');
	}
});

app.post('/register', (req, res) => {
	const newUsername = req.body.newUsername;
	const newPassword = req.body.newPassword;
	
	if (newUsername && newPassword && !users[newUsername]) {
		users[newUsername] = newPassword;
		res.send('Registration successful! Please login.');
	} else {
		res.send('Invalid registration');
	}
});

app.get('/home', (req, res) => {
	if (req.session.user) {
		res.send(`Welcome, ${req.session.user}!`);
	} else {
		res.send('Please login to view this page!');
	}
});
  
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});