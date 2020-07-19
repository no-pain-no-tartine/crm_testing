const http = require('http');
const mongoose = require('mongoose');

//mongoose.connect('mongodb://' + process.env['DB_CONTAINER'] + '/' + process.env.DB_NAME, { useNewUrlParser: true })
mongoose.connect('mongodb://mongo/crm_db', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('conected to mongoDB');
});

const server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Ca marche chef !');
});
server.listen(3000);