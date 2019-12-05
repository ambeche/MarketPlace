'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();


 const addUser = async(params) => {
     try {
         const [rows]= await promisePool.execute('INSERT INTO users (name, nickname, email, password) VALUES (?, ?, ?, ?);',
         params,
         );
         return [rows];
     }catch(e){
        console.log('err',e.message);
     }
 };


const getUser = async (params) => {
    try{
     const [rows] = await promisePool.execute('SELECT * FROM users WHERE id = ?;',
      params,
      );
     return rows;
    }catch(e){
      console.log('err',e.message);
    }
  };

const getAllUsers = async () => {
    try {
      const [rows] = await promisePool.query('SELECT * FROM users');
      return rows;
    } catch (e) {
      console.log('error', e.message);
    }   
  };

  module.exports = {
    getAllUsers,
    getUser,
    addUser,
  };
  