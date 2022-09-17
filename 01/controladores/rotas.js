const express = require('express')
const rotas = express()
const alunos = require('./alunos')
const intermediarios = require('./intermediarios')


rotas.get('/alunos', alunos.listarAlunos)
rotas.post('/alunos', intermediarios.verificarPropriedades, alunos.addAlunos)
rotas.get('/alunos/:id', intermediarios.idInvalido, alunos.obterAlunos)
rotas.delete('/alunos/:id', alunos.dltAlunos)
module.exports = rotas