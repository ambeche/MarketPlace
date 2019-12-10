'use strict';
const express = require('express');
const passport = require('./utils/pass');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use(express.static('uploads'));
app.use('/thumbnails', express.static('thumbnails'));

app.use('/uploads', express.static('uploads'));

const productRoute = require('./Routes/productRoute.js');
const userRoute = require('./Routes/userRoute.js');
const authRoute = require('./routes/authRoute');

app.use('/product', passport.authenticate('jwt', {session: false}), productRoute);
app.use('/user', passport.authenticate('jwt', {session: false}), userRoute);
app.use('/auth', authRoute);

app.listen(port, () => console.log(`MarketPlace app listening on port ${port}!`));