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

const getProductCategory = async (params) => {
    try{
<<<<<<< HEAD
      const [rows] = await promisePool.execute('SELECT *, Users.nickname as owner FROM Products INNER JOIN Users ON Users.nickname = Products.owner WHERE order_date IS NULL AND Products.category = ?;', params);
=======
      const [rows] = await promisePool.execute('SELECT name, price, description, specification, category,file_name, Users.nickname as owner FROM Products INNER JOIN Users ON Users.nickname = Products.owner WHERE order_date IS NULL AND Products.category = ?;', params);
>>>>>>> 9587d1e85555b567960a0950e4db89120f9d7a9f
      return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getAllProducts = async() => {
    try{
<<<<<<< HEAD
        const [rows] = await promisePool.execute('SELECT *, Users.nickname as owner FROM Products INNER JOIN Users ON Users.nickname = Products.owner WHERE order_date IS NULL;');
=======
        const [rows] = await promisePool.execute('SELECT name, price, description, specification, category,file_name, Users.nickname as owner FROM Products INNER JOIN Users ON Users.nickname = Products.owner WHERE order_date IS NULL;');
>>>>>>> 9587d1e85555b567960a0950e4db89120f9d7a9f
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