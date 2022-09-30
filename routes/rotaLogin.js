const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const ValidarLogin = require('../middlewares/validarLogin')

router.get("/login", loginController.login);
router.post("/login", loginController.auth);
router.get('/usuario');

module.exports = router;