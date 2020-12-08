
const institutoCollection = require('../models/institutoSchema')


//Get em todos os solicitantes cadastratos - deve ser utilizado pelas instituições com acesso (ongs, abrigos, governo)
const getAllInst = (req, res) => {
  institutoCollection.find((error, institutos) => {
    if (error) {
      return res.status(500).send(error)
    } else {
      return res.status(200).json({
        mensagem: "Conheça todos os apoiadores",
        institutos
      })
    }
  })
}

//GET getName - busca os institutos pelo nome - geral
const getNameInst = (req, res) => {
  solicitanteCollection.findOne({ nome: req.params.nome }, (error, nome) => {
    if (nome) {
      return res.status(200).json({
        mensagem: "Apoiador encontrado",
        nome

      })

    } else {
      return res.status(500).send({
        mensagem: "Apoiador não encontrado",
        error
      })
    }
  })
}

//Post - create para adicionar Instituto
const addInstituto = (req,res) => {
  const institutoBody = req.body
  const cadastro = new institutoCollection(institutoBody)

  cadastro.save((error) => {
    if (error) {
      return res.status(400).send(error)
    } else {
      return res.status(200).send({
        mensagem: "Cadastro realizado com sucesso!",
        cadastro
      })
    }
  })
}

//DELETE - deleta instituto por id específico e retorna mensagem - próprio solicitante e instituições com permissão" 
const deleteInstById = (req, res) => {
  const idParam = req.query
  solicitanteCollection.findByIdAndDelete(idParam, (error, apoiador) => {
    if (error) {
      return res.status(500).send({
        mensagem: "Algo inesperado aconteceu ao deletar",
        error
      })

    } else {
      if (apoiador) {
        return res.status(200).send({
          mensagem: "Cadastro apagado com sucesso"
        })
      } else {
        return res.sendStatus(404)
      }
    }
  })
}


module.exports = {
  getAllInst,
  getNameInst,
  addInstituto,
  deleteInstById
}