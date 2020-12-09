const mongoose = require('mongoose')
const Schema = mongoose.Schema

/* _ID
Título do Post
data - gerada automaticamente
Especificação
do Post - subject (pode ser denúncia, doação, oferta de emprego, notícias)
Conteúdo
Usuário / Anon 
Tags
Como filtrar palavras pejorativas?
se for denúncia, como deixar a visualização apenas para instituições com permissão?; Integrar com api da polícia?*/


const blogSchema = new Schema({
  _id:{
    type: mongoose.Schema.Types.ObjectId,
    auto:true,
    required:true 
  },
  date: {
    type: Date,
    default: Date.now
  },

  title:{
    type: String,
    required: true
  },
  
  subject:{
    type: String,
    required: true
  },
  content:{
    type: String,
    required: true
  },
  user:{
    type: String,
    required: false
  },
  tags:{
    type: Array,
    items: {
      type: String
    },
    required: false
  }
})

const blogCollection = mongoose.model('blog', blogSchema)

module.exports = blogCollection;
