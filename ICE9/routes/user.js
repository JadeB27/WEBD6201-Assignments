const express = require('express');

const { homeView } = require('../controllers/userController');

const router = express.Router();

router.post('/', homeView);

module.exports = router;