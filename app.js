const express = require('express');
const app = express();
const routerBrazilCases = require('./routes/brazil-cases');
const cors = require('cors');

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use('/cases', routerBrazilCases);

app.use('/test', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, deu certo'
    });
});

module.exports = app;