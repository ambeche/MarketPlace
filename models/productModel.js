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
}

const updateProduct = async(params) => {
    try{
        const [rows] = await promisePool.execute('UPDATE products SET name = ?, price = ?, description = ?, specification = ?, category = ?, order_date = NULL, buyer = NULL WHERE products.product_id = ?;',
        params,
        );
        return rows;
    }catch(e){
        console.log('err',e.message); 
    }
}

const deleteProduct = async (params) => {
    try{ 
        const [rows] = await promisePool.execute('DELETE FROM products WHERE product_id = ?;',
        params,
        );
        return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProductCategory = async (params) => {
    try{

      const [rows] = await promisePool.execute('SELECT *, Users.nickname as owner FROM Products INNER JOIN Users ON Users.nickname = Products.owner WHERE order_date IS NULL AND Products.category = ?;', params);
      return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getAllProducts = async() => {
    try{
        const [rows] = await promisePool.execute('SELECT *, Users.nickname as owner FROM Products INNER JOIN Users ON Users.nickname = Products.owner WHERE order_date IS NULL;');

        return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProduct = async(params) => {
    try{
        const [rows] = await promisePool.execute('SELECT *, Users.nickname as owner FROM Products INNER JOIN Users ON Users.nickname = Products.owner WHERE order_date IS NULL AND name = ?;', params);
        return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProductsDetails = async(params) => {
    try{
        const [rows] = await promisePool.execute('SELECT *, Users.nickname as owner FROM products WHERE products.id = ?;', params);
        return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}



const orderProduct =  async (params) => {
    try{
      const [rows] = await promisePool.execute('UPDATE Products  SET buyer = ? WHERE Product.product_id = ?;', params);
      return rows;
    }catch(e){
        console.log('err',e.message);
    }  
}  

const confirmProduct =  async (params) => {
    try{
      const [rows] = await promisePool.execute('UPDATE Products SET order_date = ? WHERE Product.product_id = ?;',
      params,
      );
      return rows;
    }catch(e){
        console.log('err',e.message);
    }  
}

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