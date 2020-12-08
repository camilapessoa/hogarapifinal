const express = require('express');
const router = express.Router();

router.get("/", (req, res) => { //chamo router, função de get, chamo uma function req e res. envio estatus 200 e envio -send o texto
  //verificar essa arrow function


  res.status(200).send({
    titulo: "API HOGAR - {Reprograma}",
    version: "1.0.0"
  })
})

module.exports = router;