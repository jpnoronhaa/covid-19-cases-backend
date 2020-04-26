const express = require('express');
const app = express();
const cors = require('cors')
const routerBrazilCases = require('./routes/brazil-cases');

app.use(cors());

app.use('/cases', routerBrazilCases);

app.use('/test', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, deu certo'
    });
});

module.exports = app;