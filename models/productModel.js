'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();


const addProduct = async (params) => {
    try{
      const [rows] = await promisePool.execute('INSERT INTO products(name, price, description, specification, category, metadata, file_name, owner) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
      params,
      );
      return rows;
    }catch(e){
        console.log('err',e.message);
    }  
};

const updateProduct = async(params) => {
    try{
        const [rows] = await promisePool.execute('UPDATE products SET name = ?, price = ?, description = ?, specification = ?, category = ?  WHERE product_id = ?;',
        params,
        );
        return rows;
    }catch(e){
        console.log('err',e.message); 
    }
};

const deleteProduct = async (params) => {
    try{ 
        const [rows] = await promisePool.execute('DELETE  FROM products WHERE product_id = ?;',
        params,
        );
        return [rows];
    }catch(e){
        console.log('err',e.message);
    }
};

const getProductCategory = async (params) => {
    try{

      const [rows] = await promisePool.execute('SELECT *, users.nickname as owner FROM products INNER JOIN users ON users.nickname = products.owner WHERE order_date IS NULL AND products.category = ?;', params);
      return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getAllProducts = async() => {
    try{
        const [rows] = await promisePool.execute('SELECT *, users.nickname as owner FROM products INNER JOIN Users ON users.nickname = products.owner WHERE order_date IS NULL;');

        return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProduct = async(params) => {
    try{
        // const [rows] = await promisePool.execute('SELECT *, users.nickname as owner FROM products INNER JOIN Users ON users.nickname = products.owner WHERE order_date IS NULL AND name = ?;', params);
        const [rows] = await promisePool.execute('SELECT *, users.nickname as owner FROM products INNER JOIN users ON users.nickname = products.owner WHERE product_id = ?;', params);
        return [rows];
    }catch(e){
        console.log('err',e.message);
    }
};

const getProductsDetails = async(params) => {
    try{
        const [rows] = await promisePool.execute('SELECT *, users.nickname as owner FROM products WHERE products.id = ?;', params);
        return [rows];
    }catch(e){
        console.log('err',e.message);
    }
};



const orderProduct =  async (params) => {
    try{
      const [rows] = await promisePool.execute('UPDATE products  SET buyer = ? WHERE product.product_id = ?;', params);
      return rows;
    }catch(e){
        console.log('err',e.message);
    }  
}  ;

const confirmProduct =  async (params) => {
    try{
      const [rows] = await promisePool.execute('UPDATE products SET order_date = ? WHERE product.product_id = ?;',
      params,
      );
      return rows;
    }catch(e){
        console.log('err',e.message);
    }  
};

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getProductCategory,
    getAllProducts,
    getProductsDetails,
    orderProduct,
    confirmProduct,
    getProduct,
}