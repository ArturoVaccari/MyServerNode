const express = require('express')
const app = express()
const lista = require('./lista')
let port = process.argv[2] || 2223


app.use(express.urlencoded({extended: false}))


app.use('/api/v1/todos', lista)

app.use((req, res) => {
    res.status(404).send('what??? error 404')
  });
  app.listen(port)  