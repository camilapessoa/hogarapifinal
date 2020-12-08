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

//http://localhost:33/solicitantes/criars
router.post('/criars', controller.addSolicitante)

router.delete('/del', controller.deleteById)

module.exports = router;

//dúvidas: rotas podem se confundir?

