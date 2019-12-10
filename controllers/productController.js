'use strict';

const productModel = require('../models/productModel.js');
const resize = require('../utils/resize.js');
const imageMeta = require ('../utils/imageMeta.js');
const path = require('path');

const product_create = async (req, res) => {
  try {
      
    await resize.makeThumbnail(req.file.path, 
    'thumbnails/' + req.file.filename,
    {width:160, height:160});
  
    const metadata = await imageMeta.getCoordinatesAndDimension(req.file.path);
    console.log('metadata', metadata);
  
    const params = [
      req.body.name,
      req.body.price,
      req.body.description, 
      req.body.specification,
      req.body.category,
      metadata,
      req.file.filename,
      req.body.owner  ,
    ];

    const response = await productModel.addProduct(params);
    await res.json(response);
  }

  catch (e) {
    console.log('error', e);
    res.status(400).json({message: 'error'});
  }
};

const product_update = async (req, res) => {

  const params = [  
    req.body.name,
    req.body.price,
    req.body.description, 
    req.body.specification,
    req.body.category,
    req.body.order_date,
    req.body.id,
  ];

  const response = await productModel.updateProduct(params);
  await res.json({message: 'product modified', response}); 
};

const product_delete = async(req, res) => {
  const params = [req.params.id];
  const response = await productModel.deleteProduct(params);
  await res.json({message: 'product deleted', response});
};

const product_order= async(req, res) => {
  const params = [
    req.body.buyer,
    req.body.id,
  ];
  const response = await productModel.orderProduct(params);
  await res.json({message: 'product ordered', response});
};

const product_sold = async(req, res) => {
  const params = [
    // req.body.order_date,
    req.body.id,
  ];
  const response = await productModel.confirmProduct(params);
  await res.json({message: 'product ordered', response});
};

const product_category = async (req, res) => {
  const params = [req.params.category];
  const products = await productModel.getProductCategory(params);
  await res.json(products);
};

const product_get_all = async (req, res) => {
  const products = await productModel.getAllProducts();
  await res.json(products);
};

const product_get = async(req, res) => {
  const params = [req.body.name];
  const product = await productModel.getProduct(params);
  await res.json(product);
};

module.exports = {
 product_create,
 product_delete,
 product_category,
 product_order,
 product_get_all,
 product_update,
 product_sold,
 product_get,
};