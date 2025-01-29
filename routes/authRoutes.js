const express = require('express');
const { signup, login } = require('../controllers/authController');
const { validateLogin,validateSignup }=require('../middleware/validationMiddleware.js') ;

const router = express.Router();

router.post('/signup', validateSignup ,signup);
router.post('/login', validateLogin ,login);

module.exports = router;
