
const solicitanteCollection = require('../models/solicitanteSchema')


//Get em todos os solicitantes cadastratos - deve ser utilizado pelas instituições com acesso (ongs, abrigos, governo)
const getAll = (req, res) => {
  solicitanteCollection.find((error, solicitantes) => {
    if (error) {
      return res.status(500).send(error)
    } else {
      return res.status(200).json({
        mensagem: "Todos os solicitantes cadastrados.",
        solicitantes
      })
    }
  })
}



//GET getName - busca os solicitantes pelo nome (acesso pelas instituições)
const getName = (req, res) => {
  solicitanteCollection.findOne({ nome: req.params.nome }, (error, nome) => {
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


//POST para add solicitante - pode ser realizado pelo próprio solicitante ou por agente institucional com permissão (assistente social)
const addSolicitante = (req, res) => {
  const solicitanteBody = req.body
  const cadastro = new solicitanteCollection(solicitanteBody)

  cadastro.save((error) => {
    if (error) {
      return res.status(400).send(error)
    } else {
      return res.status(200).send({
        mensagem: `${"Cadastro realizado com sucesso - HELP Brasil para informações: https://help.unhcr.org/brazil/#_ga=2.186131113.1648763200.1607413216-2053606720.1606725861"}`,
        cadastro
      })
    }
  })
}

//Atualiza completamente cadastro do solicitante e retorna mensagem amigável Obs: id não pode ser modificado
const updateSolicitante = (req, res) => {
  const idParam = req.query
  const contatoBody = req.body
  const update = { new: true }

  contatoCollection.findByIdAndUpdate(idParam, contatoBody, update, (error, solicitante) => {

    if (error) {
      return res.status(500).send({
        mensagem: "Algo inesperado aconteceu ao atualizar!",
        error
      })

    } else {
      return res.status(200).send({
        mensagem: "Cadastro atualizado com sucesso",
        solicitante
      })
    }


  }
  )
}

//Atualiza a propriedade endereço ou celular do cadastro pelo id - front irá inserir qual campo deseja atualizar
const updateField = (req, res) => {
  const idParam = req.query
  const { celular, enderecoAtual }= req.body
  //const enderecoAtual = req.body.enderecoAtual
  //const celular = req.body.celular
  const field = {
    "celular": celular,
    "enderecoAtual": enderecoAtual
  }

  const update = { runValidators: true }
//{"celular":celular} || {"enderecoAtual": enderecoAtual}
  solicitanteCollection.findByIdAndUpdate(idParam, field, update, (error, contato) => {

    if (error) {
      return res.status(500).send({
        mensagem: "Algo inesperado aconteceu ao atualizar",
        error
      })

    } else {
      return res.status(200).send({
        mensagem: "sucesso",
        contato
      })
    }
  })
}



//DELETE - deleta solicitante por id específico e retorna mensagem - próprio solicitante e instituições com permissão
//csolicitante/deletar/[_ID]" 
const deleteById = (req, res) => {
  const idParam = req.query
  solicitanteCollection.findByIdAndDelete(idParam, (error, solicitante) => {
    if (error) {
      return res.status(500).send({
        mensagem: "Algo inesperado aconteceu ao deletar",
        error
      })

    } else {
      if (solicitante) {
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
  getAll,
  getName,
  addSolicitante,
  updateSolicitante,
  updateField,
  deleteById
}

