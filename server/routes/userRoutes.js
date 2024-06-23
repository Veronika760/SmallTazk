// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/userController');

router.post('/signup', registerUser);
router.post('/login', authUser);

module.exports = router;
