const express = require('express')
const UserController = require('../controllers/User')
const router = express.Router();
router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne);
router.post('/user', UserController.create);

module.exports = router