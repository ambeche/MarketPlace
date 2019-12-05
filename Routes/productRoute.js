'use strict';
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');
const multer = require('multer');
const upload = multer({dest: 'uploads'});

const port = 3000;


router.get('/', productController.product_get_all);
router.get('/:id', productController.product_getting);

router.post('/', upload.single('product'), productController.create_product);

router.put('/', productController.update_product);

router.delete('/:id', productController.delete_product);

module.exports = router;