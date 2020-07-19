const http = require('http');
const mongoose = require('mongoose');
const express = require('express');
const contactRoute = require('./routes/contactRoute');
const handlebars = require('express-handlebars');
var path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + process.env.DB_CONTAINER + '/' + process.env.DB_NAME, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to mongoDB');
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'index',
    extname: 'hbs'
}));

app.use(express.static('public'));

contactRoute(app);

const port = process.env.SERVER_PORT
app.listen(port, () => console.log(`App listening to port ${port}`));