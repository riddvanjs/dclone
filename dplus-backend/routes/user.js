const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const Auth = require('../middleware/auth')

router.post('/user', userController.addMember);
router.post('/login', userController.login);
router.get('/me', Auth.isAuthenticated, userController.me);

module.exports = router;