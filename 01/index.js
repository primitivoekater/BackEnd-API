const express = require('express')
const rotas = require('./controladores/rotas')
const app = express()
const { validarSenha } = require('./controladores/intermediarios')
app.use(express.json())


app.use(validarSenha)
app.use(rotas)



app.listen(3000)