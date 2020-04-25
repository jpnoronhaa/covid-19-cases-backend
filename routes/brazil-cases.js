const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();
let globalCases, brazilCases;

function getBrazilCases(globalCases){
    const brazilCases = globalCases.filter( specificCase => specificCase.countriesAndTerritories === 'Brazil');
    return brazilCases;
}


router.get('/' , async (req, res, next) => {

    await fetch('https://opendata.ecdc.europa.eu/covid19/casedistribution/json/')
    .then(resp=> resp.text())
    .then((body) => {
        globalCases = JSON.parse(body).records;
        brazilCases = getBrazilCases(globalCases);

        res.json(brazilCases);
    });

    

});



module.exports = router;