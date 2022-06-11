
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const db = require('../database/models')

const CriarContaController = {
    index: (req, res) => {
        return res.render('criarConta')
    },

    acaoCadastrar: async (req, res) => {
        const cadastrarUsuario = {
            nomeCompleto: req.body.nomeCompleto,
            foto: req.body.foto,
            email: req.body.email,
            telefone: req.body.telefone,
            sexo: req.body.sexo,
            dataDeNascimento: req.body.dataDeNascimento,
            cpf: req.body.cpf,
            senha: bcrypt.hashSync(req.body.senha),
            endereco: {
                rua: req.body.rua,
                numero: req.body.numero,
                bairro: req.body.bairro,
                complemento: req.body.complemento,
                cidade: req.body.cidade,
                estado: req.body.estado,
                cep: req.body.cep
            }
        }

        await db.Cliente.create(cadastrarUsuario, {include:["endereco"]});

        res.redirect('/painelUsuario');
    }
}

module.exports = CriarContaController;