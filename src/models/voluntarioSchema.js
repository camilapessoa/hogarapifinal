//chamar mongoose
const mongoose = require('mongoose')

//chamar a função pronta Schema
const Schema = mongoose.Schema

//criar o Schema

/* _ID
Nome
voluntariado - posso ajudar como:
Identidade
Data de Nascimento
Endereço
celular
Ocupação
Idioma
Email
Foto */

const voluntarioSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, //tipo de dado de id
    auto: true,
    required: true
  },
  nome: {
    type: String,
    required: true
  },

  voluntariado:{
    type: Array,
    items: {
      type: String
    },
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

  endereco: {
    type: String,
    required: true
  },

  celular: {
    type: String, //número que não irá fazer cálculo deve vir como String
    required: true
  },

  ocupacao: {
    type: String,
    required: false
  },

  idioma: {
    type: Array,
    itens:{ 
      type: String
    },
    required: false
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

const voluntarioCollection = mongoose.model('voluntario', voluntarioSchema)

module.exports = voluntarioCollection
