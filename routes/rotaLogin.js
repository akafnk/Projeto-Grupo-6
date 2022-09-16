const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get("/login", loginController.login);
router.post("/login",loginController.salvarFormulario);
router.get('/usuario',loginController.usuario);

module.exports = router;