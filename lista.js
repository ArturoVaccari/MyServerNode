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
  

//postman in modalità post
router.post('/', (req, res) => {
    const body = req.body
    const {
        id,
        titolo,
        descrizione,
        azione
    } = req.body
    
const status = {}

if (azione === "elenca"){
        if (titolo) {
            status.code = "elenca"
            } else {
            status.code = "error"
            status.message = "titolo mancante"
            status.campo = "titolo"
            } 
    }
    else {
    status.code = "error"
    status.message = "azione deve essere elenca"
    status.campo = "azione"

}
console.log(id, titolo, descrizione, azione)
res.send(status)
})


//postman in modalità aggiorna
router.put('/', (req, res) => {
    const body = req.body
    const {
        id,
        titolo,
        descrizione,
        azione
    } = req.body
    
const status = {}

if (azione === "aggiorna"){
    if (id) {
        status.code = "in aggiornamento"
    } else {
        status.code = "error"
        status.message = "id mancante"
        status.campo = "id"
    }
}
 else {
    status.code = "error"
    status.message = "azione deve essere aggiorna"
    status.campo = "azione"

}

console.log(id, titolo, descrizione, azione)
res.send(status)
})

// postman in modalità delete
router.delete('/', (req, res) => {
    const body = req.body
    const {
        id,
        titolo,
        descrizione,
        azione
    } = req.body
    
const status = {}

if (azione === "elimina"){
    if (id) {
        status.code = "in eliminazione"
    } else {
        status.code = "error"
        status.message = "id mancante"
        status.campo = "id"
    }
}
else {
    status.code = "error"
    status.message = "azione deve essere elimina"
    status.campo = "azione"
}
console.log(id, titolo, descrizione, azione)
res.send(status)
})


module.exports = router