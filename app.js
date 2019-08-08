const express = require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'))
app.get('/about', (req, res) => res.render('about'))
app.get('/work', (req, res) => res.render('work'))
app.get('/contact', (req, res) => res.render('contact'))
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
