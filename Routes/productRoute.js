'use strict';
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');
const multer = require('multer');
const upload = multer({dest: 'uploads'});

const port = 3000;


router.get('/', productController.get_all_products);
router.get('/', productController.get_details_product);
router.get('/mobiles', productController.get_mobiles);
router.get('/home', productController.get_home);
router.get('/magazines', productController.get_magazines);
router.get('/books', productController.get_books);
router.get('/computers', productController.get_computers);
router.get('/entertainments', productController.get_entertainment);
router.get('/furniture', productController.get_furniture);
router.get('/fitness', productController.get_fitness);
router.get('/automative', productController.get_automative);
router.get('/others', productController.get_others);

router.post('/', upload.single('product'), productController.create_product);

router.put('/', productController.update_product);
router.put('/', productController.order_product);
router.put('/', productController.confirm_sold);

router.delete('/:id', productController.delete_product);

module.exports = router;