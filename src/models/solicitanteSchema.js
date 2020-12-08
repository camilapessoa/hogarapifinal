//chamar mongoose
const mongoose = require('mongoose')

//chamar a função pronta Schema
const Schema = mongoose.Schema

//criar o Schema

/* _ID
Nome
Identidade
Data de Nascimento
Local de origem
Data de Chegada
Endereço atual
Ocupação
Formação
Idioma - aceita array?
Email
Telefone
Foto */

const solicitanteSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, //tipo de dado de id
    auto: true,
    required: true
  },
  nome: {
    type: String,
    required: true
  },

  identidade: {
    type: String,
    required: false
  },

  dataNascimento: {
    type: Date,
    required: true
  },

  localOrigem: {
    type: String,
    required: true
  },

  dataChegada: {
    type: Date,
    required: true
  },

  enderecoAtual: {
    type: String,
    required: true
  },

  celular: {
    type: String, //número que não irá fazer cálculo deve vir como String
    required: true
  },

  ocupacao: {
    type: String,
    required: true
  },

  formacao: {
    type: String,
    required: false
  },

  idioma: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },

  fotoPerfil: {
    type: String, //é String porque é um link
    required: false //não é necessário inserir já que não é obrigatório mas é importante manter para permanecer como autoexplicativo - boas práticas.

  }
})

const solicitanteCollection = mongoose.model('solicitante', solicitanteSchema)

module.exports = solicitanteCollection
