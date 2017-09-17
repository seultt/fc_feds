//============================================================================
// SET UP Dependency
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const app = express();
const dbPath = path.join(__dirname, '/data/books.json');

//============================================================================
// CONFIGURATION
// handlebars
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');
//static File Service
app.use(express.static('public'));
//Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//============================================================================
//ROUTES

//index
app.get('/', (req, res) => res.render('index'));

// GET books
app.get('/books', (req, res) => {
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) throw err;
    // json 문자열을 객체화하여 변수객체에 담음
    const { books } = JSON.parse(data);
    //  
    res.json(books);
  });
});



app.listen(3001, () => console.log('app listening on http://localhost:3001'));