

const express = require('express'),
    app = express(),
    mysql = require('mysql'), // import mysql module
    cors = require('cors'),
    bodyParser = require('body-parser');

// setup database
db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'decent'
})

// make server object that contain port property and the value for our server.
var server = {
    port: 3000
};
const addressRouter = require('./routes/addressRouutes');
const invoiceRouter = require('./routes/invoicesRoutes');

// use the modules
app.use(cors())
app.use(bodyParser.json());

app.use('/adrress', addressRouter);
app.use('/invoices', invoiceRouter);

// starting the server
app.listen(server.port, () => console.log(`Server started, listening port: localhost:${server.port}`));