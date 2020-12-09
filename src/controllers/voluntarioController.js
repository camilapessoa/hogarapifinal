const voluntarioCollection = require('../models/voluntarioSchema')


//Get em todos os voluntarios cadastratos - deve ser utilizado pelas instituições com acesso (ongs, abrigos, governo)
const getAllVol = (req, res) => {
  voluntarioCollection.find((error, voluntarios) => {
    if (error) {
      return res.status(500).send(error)
    } else {
      return res.status(200).json({
        mensagem: "Todos os voluntarios cadastrados.",
        voluntarios
      })
    }
  })
}



//GET getName - busca os voluntarios pelo nome (acesso pelas instituições)
const getNameVol = (req, res) => {
  voluntarioCollection.findOne({ nome: req.params.nome }, (error, nome) => {
    if (nome) {
      return res.status(200).json({
        mensagem: "Nome encontrado",
        nome

      })

    } else {
      return res.status(500).send({
        mensagem: "Nome não encontrado",
        error
      })
    }
  })
}


//POST para add voluntario - pode ser realizado pelo próprio voluntario ou por agente institucional com permissão (assistente social)
const addVoluntario = (req, res) => {
  const voluntarioBody = req.body
  const cadastro = new voluntarioCollection(voluntarioBody)

  cadastro.save((error) => {
    if (error) {
      return res.status(400).send(error)
    } else {
      return res.status(200).send({
        mensagem: `${"Obrigado! Cadastro realizado com sucesso"}`,
        cadastro
      })
    }
  })
}

//Atualiza completamente cadastro do voluntario e retorna mensagem amigável Obs: id não pode ser modificado
const updateVoluntario = (req, res) => {
  const idParam = req.query
  const contatoBody = req.body
  const update = { new: true }

  voluntarioCollection.findByIdAndUpdate(idParam, contatoBody, update, (error, voluntario) => {

    if (error) {
      return res.status(500).send({
        mensagem: "Algo inesperado aconteceu ao atualizar!",
        error
      })

    } else {
      return res.status(200).send({
        mensagem: "Cadastro atualizado com sucesso",
        voluntario
      })
    }
  }
  )
}

//Atualiza a propriedade escolhida do cadastro pelo id - front irá inserir qual campo deseja atualizar
const updateFieldVol = (req, res) => {
  const idParam = req.query
  const field = req.body
  
  const update = { runValidators: true }
   voluntarioCollection.findByIdAndUpdate(idParam, field, update, (error, contato) => {

    if (error) {
      return res.status(500).send({
        mensagem: "Algo inesperado aconteceu ao atualizar",
        error
      })

    } else {
      return res.status(200).send({
        mensagem: "Atualizado com sucesso",
        contato
      })
    }
  })
}



//DELETE - deleta voluntario por id específico e retorna mensagem - próprio voluntario e instituições com permissão
//cvoluntario/deletar/[_ID]" 
const deleteByIdVol = (req, res) => {
  const idParam = req.query
  voluntarioCollection.findByIdAndDelete(idParam, (error, voluntario) => {
    if (error) {
      return res.status(500).send({
        mensagem: "Algo inesperado aconteceu ao deletar",
        error
      })

    } else {
      if (voluntario) {
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
  getAllVol,
  getNameVol,
  addVoluntario,
  updateVoluntario,
  updateFieldVol,
  deleteByIdVol
}

