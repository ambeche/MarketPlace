'use strict';

const express = require ('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', userController.user_get_all);

router.get('/:id', userController.user_getting);

router.post('/', userController.create_user);

router.put('/', (req, res) =>{
    res.send("With this endpoint you can edit users.");
  });

  router.delete('/', (req, res) =>{
    res.send("With this endpoint you can delete users.");
  });

  module.exports = router; 