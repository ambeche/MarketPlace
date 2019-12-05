'use strict';

const productModel = require('../models/productModel.js');
const resize = require('../utils/resize.js');
const imageMeta = require ('../utils/imageMeta.js');

const create_product = async (req, res) => {
    try {

    await resize.makeThumbnail(req.file.path, 
      'thumbnails/' + req.file.filename,
      {width:160, height:160},
      );
  
      const coords = await imageMeta.getCoordinates(req.file.path);
      console.log('coords', coords);
  
    const params = [
      req.body.name,
      req.body.type,
      req.file.filename,
      req.body.description, 
      req.body.price,
      req.body.small_description,
      coords,
  
    ];
    const response = await productModel.addProduct(params);
            await res.json(response);
  }catch (e) {
    console.log('error', e);
    res.status(400).json({message: 'error'});
  
  }
  };

 const update_product = async (req, res) => {

    const params = [  
      req.body.name,
      req.body.type,
      req.body.description, 
      req.body.price,
      req.body.small_description,
      req.body.id,
  
    ];
    const response = await productModel.updateProcut(params);
            await res.json({message: 'product modified', response}); 
  
  };

const delete_product = async(req, res) => {
    const params = [
      req.params.id,
    ];
    const response = await productModel.deleteProduct(params);
            await res.json({message: 'product deleted', response});
  };

const product_get_all = async (req, res) => {
    const products = await productModel.getAllProducts();
    await res.json(products);
  };

const product_getting  = async (req, res) => {
    const params = [req.params.id];
    const poduct = await productModel.getProduct(params);
    await res.json(poduct[0]);
  };

 const product_All_description = async(req, res) => {
   const params = [req.params.id];
   const alldescrip = await productModel.getAllDescription_product(params);
   await res.json(alldescrip[0]);
 };

const  product_small_description = async(req, res) => {
  const params = [req.params.id];
  const smalldescr = await productModel.get_small_description(params);
  await res.json(smalldescr[0]);
};

/*const Product_ordering = async(req, res) => {
  const params = [req.params.id];
  const order = await productModel.orderProduct(params);
  await res.json(order[0]);
}*/

module.exports = {
    create_product,
    update_product,
    product_getting,
    product_get_all,
    delete_product,
    product_small_description,
    product_All_description,
  
  };