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
  
      const metadata = await imageMeta.getCoordinates(req.file.path);
      console.log('metadata', metadata);
  
      const params = [
        req.body.name,
        req.body.price,
        req.body.description, 
        req.body.specification,
        req.body.category,
        metadata,
        req.file.filename,
        req.body.owner,
        
      ];
      const response = await productModel.addProduct(params);
      await res.json(response);
    }

    catch (e) {
      console.log('error', e);
      res.status(400).json({message: 'error'});
    }
  };

const update_product = async (req, res) => {

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

const delete_product = async(req, res) => {
  const params = [
      req.params.id,
    ];
  const response = await productModel.deleteProduct(params);
  await res.json({message: 'product deleted', response});
};

const order_product = async(req, res) => {
  const params = [
    req.body.buyer,
    req.body.id,
  ];
  const response = await productModel.orderProduct(params);
  await res.json({message: 'product ordered', response});
};

const confirm_sold = async(req, res) => {
  const params = [
    req.body.order_date,
    req.body.id,
  ];
  const response = await productModel.confirm_sold_Product(params);
  await res.json({message: 'product ordered', response});
};
const get_all_products = async (req, res) => {
  
  const products = await productModel.getAllProducts();
  await res.json(products);
};

/*const product_get  = async (req, res) => {
    const params = [req.body.id];
    const product = await productModel.getProduct(params);
    await res.json(product);
    //await res.json(poduct[0]);
};*/

const get_details_product = async(req, res) => {
  const params = [req.body.id];
  const productDetails = await productModel.getProducts_Details(params);
  await res.json(productDetails);
};

const get_mobiles = async (req, res) => {
  const products = await productModel.getProducts_Mobiles();
  await res.json(products);
};

const get_computers = async (req, res) => {
  const products = await productModel.getProducts_Computers();
  await res.json(products);
};

const get_books = async (req, res) => {
  const products = await productModel.getProducts_Books();
  await res.json(products);
};

const get_fitness = async (req, res) => {
  const products = await productModel.getProducts_fitness();
  await res.json(products);
};

const get_automative = async (req, res) => {
  const products = await productModel.getProducts_Automative();
  await res.json(products);
};

const get_home = async (req, res) => {
  const products = await productModel.getProducts_Home();
  await res.json(products);
};

const get_furniture = async (req, res) => {
  const products = await productModel.getProducts_Furniture();
  await res.json(products);
};

const get_entertainment = async (req, res) => {
  const products = await productModel.getProducts_Entertainment();
  await res.json(products);
};

const get_magazines = async (req, res) => {
  const products = await productModel.getProducts_Magazines();
  await res.json(products);
};

const get_others = async (req, res) => {
  const products = await productModel.getProducts_other();
  await res.json(products);
};
/*const Product_ordering = async(req, res) => {
  const params = [req.params.id];
  const order = await productModel.orderProduct(params);
  await res.json(order[0]);
}*/

module.exports = {
  create_product,
  update_product,
  order_product,
  confirm_sold,
  delete_product,
  get_all_products,
  get_mobiles,
  get_others,
  get_home,
  get_magazines,
  get_books,
  get_fitness,
  get_furniture,
  get_computers,
  get_entertainment,
  get_details_product,
  get_automative,
};