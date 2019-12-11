'use strict';
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const passport = require('../utils/pass');


// const login = (req, res) => {
//     // TODO: add passport authenticate
//     passport.authenticate('local', {session: false}, (err, user, info) => {
//         if (err || !user) {
//             console.log(err);
//             return res.status(400).json({
//                 message: 'Something is not right',
//                 user: user,
//             });
//         }
//         req.login(user, {session: false}, (err) => {
//             if (err) {
//                 res.send(err);
//             }
//             // generate a signed son web token with the contents of user object and return it in the response
//             const token = jwt.sign(user, 'ilenWksp2019');
//             return res.json({user, token});
//         });
//     })(req, res);
// };

const user_create_post = async (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log('user create error', errors);
        res.send(errors.array());
    } else {
        // TODO: bcrypt password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const params = [
            req.body.name,
            req.body.username,
            hash, // TODO: save hash instead of the actual password
        ];

        if (await userModel.addUser(params)) {
            next();
        } else {
            res.status(400).json({error: 'register error'});
        }

    }
};

const login = async(req,res)=>{
    const params= [req.body.username];
    const user= await userModel.getUserLogin(params);
    await res.json(user);
}

const logout = (req, res) => {
    req.logout();
    res.json({message: 'logout'});
};

module.exports = {
    login,
    user_create_post,
    logout,
};