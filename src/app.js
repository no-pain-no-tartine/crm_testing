const http = require('http');
const mongoose = require('mongoose');
const express = require('express');
const contactRoute = require('./routes/contactRoute');

mongoose.connect('mongodb://' + process.env.DB_CONTAINER + '/' + process.env.DB_NAME, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('conected to mongoDB');
});

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => res.send('Hello World !'));

/* contactRoute(app);
 */
const port = process.env.SERVER_PORT
app.listen(port, () => console.log(`App listening to port ${port}`));


/* const server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Ca marche !');
});
server.listen(3000); */