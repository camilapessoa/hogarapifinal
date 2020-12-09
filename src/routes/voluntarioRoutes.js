const express = require('express');
const router = express.Router();
const controller = require('../controllers/voluntarioController');

router.get("/", controller.getAllVol)


//http://localhost:33/voluntario/nome/Isabelle Mendes
router.get('/nome/:nome', controller.getNameVol)

//http://localhost:33/voluntario/criar
router.post('/criar', controller.addVoluntario)

//http://localhost:33/voluntario/atualizar/[ID]"
router.put('/atualizar', controller.updateVoluntario)

router.patch('/campo', controller.updateFieldVol)

//http://localhost:33/voluntario/del?_id=5fceca15682d5931e43d97ce
router.delete('/del', controller.deleteByIdVol)

module.exports = router;