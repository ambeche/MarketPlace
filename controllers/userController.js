'use strict';

const userModel = require('../models/userModel.js');

const user_create = async(req, res) => {
    const params = [
        req.body.full_name,
        req.body.nickname,
        req.body.email,
        req.body.password,
        req.body.address,
        req.body.phone_number,
    ];
    const response = await userModel.addUser(params);
    await res.json({message: 'user added', response});
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