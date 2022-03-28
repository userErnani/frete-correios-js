require('dotenv').config();
const express = require('express');
const routes = require('./Router/routes');
const porta = process.env.PORT;
const cors = require('cors');

const app = express(); 

app.use(express.json());

app.use(cors());
app.use( (req, res, next) =>{
    res.header('Access-Control-Allow-Origin' , '*' );
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Request-Headers','X-PINGOTHER, Content-Type, Authorization');
    app.use(cors());
    next();
});

app.use('/', routes);

app.listen( parseInt(porta), console.log(`PORTA ${porta}`));