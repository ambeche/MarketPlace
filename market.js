'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;



app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.use(express.static('uploads'));
app.use('/thumbnails', express.static('thumbnails'));

const productRoute = require('./Routes/productRoute.js');
const userRoute = require('./Routes/userRoute.js');

app.use('/product', productRoute);
app.use('/user', userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));