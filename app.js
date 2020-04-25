const express = require('express');
const app = express();
const routerBrazilCases = require('./routes/brazil-cases')

app.use('/cases', routerBrazilCases);

app.use('/test', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, deu certo'
    });
});

module.exports = app;