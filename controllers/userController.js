'use strict';

const userModel = require('../models/userModel.js');



const user_create = async(req, res) => {
    const params = [
        req.body.name,
        req.body.email,
        req.body.password,
    ];
    const response = await userModel.addUser(params);
    const user = await userModel.getUser([response.insertId]);
    await res.json(user);
};


const user_get = async (req, res) => {
    const params = [req.params.id];
    const user = await userModel.getUser(params);
    await res.json(user);
};

const user_get_all = async (req, res) => {
    const users = await userModel.getAllUsers();
    await res.json(users);
};

module.exports = {
    user_get_all,
    user_get,
    user_create,
  };