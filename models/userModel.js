'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();


const addUser = async (params) => {
  try {
    const [rows] = await promisePool.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?);',params);
    return rows;
  } catch (e) {
    console.log('error', e.message);
    return {error: 'error in database query'};
  }
};

const getUser = async (params) => {
  try{
    const [rows] = await promisePool.execute('SELECT * FROM users WHERE id = ?;', params);
    return rows;

  }catch(e){
    console.log('err',e.message);
  }
};

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.query('SELECT full_name, user_id, nickname, email, address, phone_number FROM users');
    return rows;
  }catch (e) {
    console.log('error', e.message);
  }   
};

const getUserLogin = async (params) => {
  try {
    console.log(params);
    const [rows] = await promisePool.execute(
        'SELECT * FROM users WHERE email = ?;',
        params);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};


module.exports = {
  getAllUsers,
  getUser,
  addUser,
  getUserLogin,

};
  