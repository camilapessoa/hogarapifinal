const express = require('express')
const router = express.Router()
const controller = require('../controllers/institutoController')

/*
@route GET
@desc retornar
@access public
@endpoint
*/

router.get("/", controller.getAllInst)

router.get("/nome/:nome", controller.getNameInst)

router.put('/atualizar', controller.updateInst)

router.post("/criar", controller.addInstituto)

router.delete("/del", controller.deleteInstById)


module.exports = router;