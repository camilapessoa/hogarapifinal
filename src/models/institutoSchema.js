//chamar mongoose
const mongoose = require('mongoose')

//chamar Schema

const Schema = mongoose.Schema

/* _ID
Razão Social / Nome
CNPJ
Endereço
Telefone
Email
Contato na empresa - Responsável direto/
instituição / ONG
Serviço prestado */

const institutoSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId, //tipo de dado de id
    auto: true,
    required: true
  },
  nomeRazao: {
    type: String,
    required: true
  },

  CNPJ: {
    type: String,
    required: true
  },

  endereco: {
    type: String,
    required: true
  },

  responsavelDireto: {
    type: String,
    required: true
  },

  servico: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: false
  },

  imagem: {
    type: String,
    required: false

  }
})

const institutoCollection = mongoose.model('instituto', institutoSchema)

module.exports = institutoCollection;