
let { alunos, identificadorAlunos } = require('../bancodedados')

const listarAlunos = (req, res) => {
    return res.status(200).json(alunos)

}

const obterAlunos = (req, res) => {
    const { id } = req.params
    const aluno = alunos.find((elemento) => {
        return elemento.id === Number(id)
    })
    if (!aluno) {
        return res.status(404).json({ Mensagem: 'Aluno não encontrado' })
    }
    return res.json(aluno)
}
const addAlunos = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body

    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ mensagem: `um ou mais campos não foram preenchidos` })
    }

    const Aluno = {
        id: identificadorAlunos++,
        nome,
        sobrenome,
        idade,
        curso,
    }
    alunos.push(Aluno)
    return res.status(201).json(addAlunos)

}

const dltAlunos = (req, res) => {
    const { id } = req.params
    const aluno = alunos.find((elemento) => {
        return elemento.id === Number(id)
    })
    if (!aluno) {
        return res.status(404).json({ Mensagem: 'Aluno não encontrado' })
    }

    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id)
    })
    return res.status(204).send()
}
module.exports = {
    listarAlunos,
    obterAlunos,
    addAlunos,
    dltAlunos

}