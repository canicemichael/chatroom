const express = require('express');
const user = require('../controllers/user.js');
const { encode } = require('../middlewares/jwt.js');

const router = express.Router();

router.post('/login/:userId', encode, (req, res, next) => { res.send("you post") });

module.exports = router;