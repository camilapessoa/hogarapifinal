const blogCollection = require('../models/blogSchema');


//Get em todos as publicacoes
const getPosts = (req, res) => {
  blogCollection.find((error, posts) => {
    if (error) {
      return res.status(500).send(error)
    } else {
      return res.status(200).json({
        mensagem: "Nosso Blog",
        posts
      })
    }
  })
}

//POST para add publicacao - pode ser realizado pelo próprio solicitante, por agente institucional, voluntário ou de forma anônima 
const addPost = (req, res) => {
  const blogBody = req.body
  const post = new blogCollection(blogBody)

  post.save((error) => {
    if (error) {
      return res.status(400).send(error)
    } else {
      return res.status(200).send({
        mensagem: `${"Publicação realizada com sucesso"}`,
        post
      })
    }
  })
}


//Patch para update em qualquer campo da publicação
const updatePostField = (req, res) => {
  const idParam = req.query
  const fields =  req.body
  
    const update = { runValidators: true }
  
  blogCollection.findByIdAndUpdate(idParam, fields, update, (error, post) => {

    if (error) {
      return res.status(500).send({
        mensagem: "Algo inesperado aconteceu ao atualizar sua publicação",
        error
      })

    } else {
      return res.status(200).send({
        mensagem: "Publicação atualizada",
        post
      })
    }
  })
}


//DELETE - deleta publicação por id específico e retorna mensagem - próprio solicitante e instituições com permissão
//blog/deletar/[_ID]" 
const deletePostById = (req, res) => {
  const idParam = req.query
  blogCollection.findByIdAndDelete(idParam, (error, post) => {
    if (error) {
      return res.status(500).send({
        mensagem: "Algo inesperado aconteceu ao apagar sua publicação",
        error
      })

    } else {
      if (post) {
        return res.status(200).send({
          mensagem: "Publicação apagada com sucesso"
        })
      } else {
        return res.sendStatus(404)
      }
    }
  })
}


module.exports = {
  getPosts,
  addPost,
  updatePostField,
  deletePostById
}