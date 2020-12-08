
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

module.exports = {
  getAllInst,
  addInstituto
}