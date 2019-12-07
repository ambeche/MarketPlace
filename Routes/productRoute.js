'use strict';
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');
const multer = require('multer');
const upload = multer({dest: 'uploads'});

const port = 3000;


router.get('/', productController.get_all_products);
router.get('/:category', productController.get_category);


router.post('/', upload.single('product'), productController.create_product);

router.put('/', productController.update_product);
router.put('/', productController.order_product);
router.put('/', productController.confirm_sold);

router.delete('/:id', productController.delete_product);

module.exports = router;