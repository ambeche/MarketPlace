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

const getProduct_Mobiles = async () => {
    try{
      const [rows] = await promisePool.execute('SELECT name, price, description, category, Users.nickname as owner FROM Products INNER JOIN Users ON Users.user_id = Products.owner WHERE order_date IS NULL AND Products.category = Mobiles;');
      return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProduct_Computers = async () => {
    try{
      const [rows] = await promisePool.execute('SELECT name, price, description, category, Users.nickname as owner FROM Products INNER JOIN Users ON Users.user_id = Products.owner WHERE order_date IS NULL AND Products.category = Computers;');
      return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProduct_Books = async () => {
    try{
      const [rows] = await promisePool.execute('SELECT name, price, description, category, Users.nickname as owner FROM Products INNER JOIN Users ON Users.user_id = Products.owner WHERE order_date IS NULL AND Products.category = Books;');
      return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProduct_Fitness = async () => {
    try{
      const [rows] = await promisePool.execute('SELECT name, price, description, category, Users.nickname as owner FROM Products INNER JOIN Users ON Users.user_id = Products.owner WHERE order_date IS NULL AND Products.category = Fitness;');
      return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProduct_Automotive = async () => {
    try{
      const [rows] = await promisePool.execute('SELECT name, price, description, category, Users.nickname as owner FROM Products INNER JOIN Users ON Users.user_id = Products.owner WHERE order_date IS NULL AND Products.category = Automotive;');
      return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProduct_Home = async () => {
    try{
      const [rows] = await promisePool.execute('SELECT name, price, description, category, Users.nickname as owner FROM Products INNER JOIN Users ON Users.user_id = Products.owner WHERE order_date IS NULL AND Products.category = Home;');
      return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProduct_Furniture = async () => {
    try{
      const [rows] = await promisePool.execute('SELECT name, price, description, category, Users.nickname as owner FROM Products INNER JOIN Users ON Users.user_id = Products.owner WHERE order_date IS NULL AND Products.category = Furniture;');
      return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProduct_Entertainment = async () => {
    try{
      const [rows] = await promisePool.execute('SELECT name, price, description, category, Users.nickname as owner FROM Products INNER JOIN Users ON Users.user_id = Products.owner WHERE order_date IS NULL AND Products.category = Entertainment;');
      return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProduct_Magazines = async () => {
    try{
      const [rows] = await promisePool.execute('SELECT name, price, description, category, Users.nickname as owner FROM Products INNER JOIN Users ON Users.user_id = Products.owner WHERE order_date IS NULL AND Products.category = Magazines;');
      return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProduct_other = async () => {
    try{
      const [rows] = await promisePool.execute('SELECT name, price, description, category, Users.nickname as owner FROM Products INNER JOIN Users ON Users.user_id = Products.owner WHERE order_date IS NULL AND Products.category = Other;');
      return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}


const getAllProducts = async() => {
    try{
        const [rows] = await promisePool.execute('SELECT name, price, description, category, Users.nickname as owner FROM Products INNER JOIN Users ON Users.user_id = Products.owner WHERE order_date IS NULL;',);
        return [rows];
    }catch(e){
        console.log('err',e.message);
    }
}

const getProducts_Details = async(params) => {
    try{
        const [rows] = await promisePool.execute('SELECT name, price, description, sprcification, category, Users.nickname as owner FROM products WHERE products.id = ?;', params);
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

//

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct_Mobiles,
    getProduct_Computers,
    getProduct_Books,
    getProduct_Fitness,
    getProduct_Automotive,
    getProduct_Home,
    getProduct_Furniture,
    getProduct_Entertainment,
    getProduct_Magazines,
    getProduct_other,
    getAllProducts,
    getProducts_Details,
    orderProduct,
    confirm_sold_Product,


}




