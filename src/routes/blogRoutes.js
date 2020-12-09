const express = require('express');
const router = express.Router();
const controller = require('../controllers/blogController');

/*
@route GET
@desc retornar
@access public
@endpoint
*/

router.get("/", controller.getPosts);
router.post("/criar", controller.addPost);
router.delete("/deletar", controller.deletePostById);
router.patch("/atualizar", controller.updatePostField);

module.exports = router;