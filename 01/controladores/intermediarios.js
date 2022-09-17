const validarSenha = (req, res, next) => {
    const { senha } = req.query
    if (senha === 'cubos123') {
        next()
    } else return res.status(401).json({ mensagem: `senha incorreta` })
}
const idInvalido = (req, res, next) => {
    let { id } = req.params
    if (id) {
        next()
    }
    return res.status(400).json({ mensagem: `informe um id` })
}
const verificarPropriedades = (req, res, next) => {
    const { nome, sobrenome, curso, idade } = req.body
    if (nome === '' || nome === ' ' || sobrenome === '' || sobrenome === ' ' || curso === ' ' || curso === '') {
        return res.status(400).json({ mensagem: `caractere invalido em um ou mais campos` })
    }
    if (idade <= 18) {
        return res.status(400).json({ mensagem: `Aluno menor de idade. vai jogar minecraft!` })
    }
    next()
}
module.exports = {
    validarSenha,
    idInvalido,
    verificarPropriedades
}