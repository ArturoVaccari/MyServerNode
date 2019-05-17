const express = require('express');
const router = express.Router();
const lista = require('./database/list')

router.get('/', (req, res, next) => {
    res.send(lista) 
});



module.exports = router