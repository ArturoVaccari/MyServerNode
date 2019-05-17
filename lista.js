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
    id,
    titolo,
    descrizione,
    azione
} = req.body

const status = {}

if (azione){
    if (azione === "elenca"){
        if (titolo) {
            status.code = "elenca"
          } else {
            status.code = "error"
            status.message = "titolo mancante"
            status.campo = "titolo"
          } 
    }
    else if (azione === "aggiorna"){
        if (id) {
            status.code = "in aggiornamento"
        } else {
            status.code = "error"
            status.message = "id mancante"
            status.campo = "id"
        }
    }
    else if (azione === "elimina"){
        if (id) {
            status.code = "in eliminazione"
        } else {
            status.code = "error"
            status.message = "id mancante"
            status.campo = "id"
        }
    }
} else {
    status.code = "error"
    status.message = "azione mancante"
    status.campo = "azione"

}



console.log(titolo, descrizione)
res.send(status)
})

module.exports = router