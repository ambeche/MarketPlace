'use strict';

const express = require ('express');
const router = express.Router();
const {body, sanitizeBody} = require('express-validator');
const userController = require('../controllers/userController.js');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', userController.user_get_all);

router.get('/:id', userController.user_get);



router.put('/', (req, res) =>{
    res.send("With this endpoint you can edit users.");
  });

  router.delete('/', (req, res) =>{
    res.send("With this endpoint you can delete users.");
  });

  module.exports = router; 