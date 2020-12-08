const express = require('express')
const router = express.Router()
const controller = require("../controllers/solicitanteController")
/* 
@route GET
@desc retornar
@access public
@endpoint  
*/

router.get("/",controller.getAll)


//http://localhost:33/solicitantes/nome/Bianca
router.get('/nome/:nome', controller.getName)

//http://localhost:33/solicitantes/criar
router.post('/criar', controller.addSolicitante)

//http://localhost:33/solicitantes/atualizar/[ID]"
router.put('/atualizar', controller.updateSolicitante)

//http://localhost:33/solicitantes/del?_id=5fceca15682d5931e43d97ce
router.delete('/del', controller.deleteById)

module.exports = router;

//dúvidas: rotas podem se confundir?

