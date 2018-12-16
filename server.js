const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear()
});

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website',
    })
});

// app.get('/Div', (req, res) => {
//     res.render('5DIV.hbs');
// });

app.use(express.static(__dirname + '/HTML-practice/Div'));
app.use(express.static(__dirname + '/HTML-practice/Form'));
app.use(express.static(__dirname + '/CSS-practice/3D'));
app.use(express.static(__dirname + '/CSS-practice/Animation'));
app.use(express.static(__dirname + '/CSS-practice/Box'));
app.use(express.static(__dirname + '/CSS-practice/Page-layout'));
app.use(express.static(__dirname + '/JS-practice/Calculator'));
app.use(express.static(__dirname + '/JS-practice/Waterfall'));

app.listen(3000, () => {
    console.log(`Server is up on port 3000`);
});