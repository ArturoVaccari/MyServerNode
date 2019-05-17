const express = require('express');
const router = express.Router();
const lista = require('./database/list')

router.get('/', (req, res, next) => {
    res.send(lista) 
});

router.get("/:id", (req, res) => {
    const id = Number(req.params.id)
    res.json(lista.list.filter(item => item.id === id))
  })
  
router.post('/', (req, res) => {
const body = req.body
const {
    titolo,
    descrizione
} = req.body

const status = {}
console.log(titolo, descrizione)
if (titolo) {
  status.code = 'ok'
} else {
  status.code = 'error'
  status.message = 'titolo sbagliato'
  status.campo = 'titolo'
}
res.send(status)
})

module.exports = router