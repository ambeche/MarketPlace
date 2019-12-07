'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();


const addProduct = async (params) => {
    try{
      const [rows] = await promisePool.execute('INSERT INTO Products(name, price, description, specification, category, metadata, file_name, owner) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
      params,
      );
      return rows;
    }catch(e){
        console.log('err',e.message);
    }  
}

const updateProduct = async(params) => {
    try{
        const [rows] = await promisePool.execute('UPDATE Products SET name = ?, price = ?, desciption = ?, specification = ?, category = ?, order_date = ? WHERE Products.product_id = ?;',
        params,
        );
        return rows;
    }catch(e){
        console.log('err',e.message); 
    }
}

const deleteProduct = async (params) => {
    try{ 
        const [rows] = await promisePool.execute('DELETE FROM Products WHERE product_id = ?;',
        params,
        );
        return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProduct_category = async (params) => {
    try{
      const [rows] = await promisePool.execute('SELECT name, price, description, specification, category, Users.nickname as owner FROM Products INNER JOIN Users ON Users.user_id = Products.owner WHERE order_date IS NULL AND Products.category = ?;', params);
      return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getAllProducts = async() => {
    try{
        const [rows] = await promisePool.execute('SELECT name, price, description, specification, category, Users.nickname as owner FROM Products INNER JOIN Users ON Users.user_id = Products.owner WHERE order_date IS NULL;');
        return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProducts_Details = async(params) => {
    try{
        const [rows] = await promisePool.execute('SELECT name, price, description, specification, category, Users.nickname as owner FROM products WHERE products.id = ?;', params);
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

const confirm_sold_Product =  async (params) => {
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
    getProduct_category,
    getAllProducts,
    getProducts_Details,
    orderProduct,
    confirm_sold_Product,
}