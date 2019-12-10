'use strict';
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, file.originalname);

    }
});
const upload = multer({storage: storage});

const port = 3000;



router.get('/', productController.product_get_all);
router.get('/:category', productController.product_category);

router.post('/', upload.single('product'), productController.product_create);

router.put('/', productController.product_update);
router.put('/', productController.product_order);
router.put('/', productController.product_sold);

router.delete('/:id', productController.product_delete);

module.exports = router;