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

router.post("/criar", controller.addInstituto)

module.exports = router;